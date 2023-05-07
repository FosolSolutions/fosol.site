using System.Net.Mime;
using Fosol.Mail;
using Fosol.Mail.Models;
using Fosol.Site.Models.Hello;
using Fosol.Site.Options;
using Fosol.Site.UoW;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Annotations;

namespace Fosol.Site.Api.Controllers;

/// <summary>
/// HelloController class, provides a controller for api endpoints used to connect with new website visitors
/// </summary>
[AllowAnonymous]
[ApiController]
[ApiVersion("1.0")]
[Route("v{version:apiVersion}/hello")]
public class HelloController : ControllerBase
{
  #region Variables
  private readonly IBasicMessageService _messageService;
  private readonly IResumeService _resumeService;
  private readonly MailClient _mailClient;
  private readonly StorageOptions _storageOptions;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a HelloController object.
  /// </summary>
  /// <param name="messageService"></param>
  /// <param name="resumeService"></param>
  /// <param name="mailClient"></param>
  /// <param name="storageOptions"></param>
  public HelloController(IBasicMessageService messageService, IResumeService resumeService, MailClient mailClient, IOptions<StorageOptions> storageOptions)
  {
    _messageService = messageService;
    _resumeService = resumeService;
    _mailClient = mailClient;
    _storageOptions = storageOptions.Value;
  }
  #endregion

  #region Endpoints
  /// <summary>
  /// Submit a new message from a contact.
  /// </summary>
  /// <param name="model"></param>
  /// <returns></returns>
  [HttpPost("messages", Name = "AddMessage")]
  [Produces(MediaTypeNames.Application.Json)]
  [ProducesResponseType(typeof(BasicMessageModel), 201)]
  [SwaggerOperation(Tags = new[] { "Hello" })]
  public async Task<IActionResult> AddMessageAsync(BasicMessageModel model)
  {
    var newMessage = model.ToEntity(Request.HttpContext.Connection.RemoteIpAddress?.ToString() ?? "");
    var message = _messageService.AddAndSave(newMessage);
    var mail = _mailClient.PrepareMessage(new EmailModel("contact-us@fosol.ca", "support@fosol.ca", "Contact Us", $"<div><p>{model.Name}</p><p>{model.Company}</p><p>{model.Email}</p><p>{model.Phone}</p><p>{model.Text}</p></div>"));
    await _mailClient.SendAsync(mail);
    return StatusCode(201, new BasicMessageModel(message));
  }

  /// <summary>
  /// Submit a resume and upload a file.
  /// </summary>
  /// <param name="model"></param>
  /// <returns></returns>
  [HttpPost("resumes", Name = "AddResume")]
  [Produces(MediaTypeNames.Application.Json)]
  [ProducesResponseType(typeof(ResumeModel), 201)]
  [SwaggerOperation(Tags = new[] { "Hello" })]
  public async Task<IActionResult> AddResumeAsync([FromForm] ResumeModel model)
  {
    var newResume = model.ToEntity();

    if (model.File?.Length > 0)
    {
      if (!Path.Exists(_storageOptions.Resume.Path)) Directory.CreateDirectory(_storageOptions.Resume.Path);

      var filename = Path.GetRandomFileName();
      var path = Path.Combine(_storageOptions.Resume.Path, filename);
      using var stream = System.IO.File.Create(path);
      await model.File.CopyToAsync(stream);
      newResume.FilePath = filename;
    }
    else
    {
      newResume.FilePath = "";
    }

    var resume = _resumeService.AddAndSave(newResume);
    var mail = _mailClient.PrepareMessage(new EmailModel("contact-us@fosol.ca", "support@fosol.ca", "Resume", $"<div><p>{model.FirstName} {model.LastName}</p><p>{model.Email}</p><p>{model.Position}</p><p>{model.Description}</p></div>"));
    await _mailClient.SendAsync(mail);
    return StatusCode(201, new ResumeModel(resume));
  }
  #endregion
}
