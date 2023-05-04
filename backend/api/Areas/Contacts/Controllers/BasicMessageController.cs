using System.Net.Mime;
using Fosol.Mail;
using Fosol.Mail.Models;
using Fosol.Site.Models.Contacts.Messages;
using Fosol.Site.UoW;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Fosol.Site.Api.Controllers;

/// <summary>
/// ContactMessageController class, provides a controller for contact message endpoints.
/// </summary>
[ApiController]
[ApiVersion("1.0")]
[Area("contacts")]
[Route("v{version:apiVersion}/[area]/messages")]
public class BasicMessageController : ControllerBase
{
  #region Variables
  private readonly IBasicMessageService _messageService;
  private readonly MailClient _mailClient;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a BasicMessageController object.
  /// </summary>
  /// <param name="messageService"></param>
  /// <param name="mailClient"></param>
  public BasicMessageController(IBasicMessageService messageService, MailClient mailClient)
  {
    _messageService = messageService;
    _mailClient = mailClient;
  }
  #endregion

  #region Endpoints
  /// <summary>
  /// Submit a new message from a contact.
  /// </summary>
  /// <param name="model"></param>
  /// <returns></returns>
  [HttpPost(Name = "AddMessage")]
  [Produces(MediaTypeNames.Application.Json)]
  [ProducesResponseType(typeof(BasicMessageModel), 201)]
  [SwaggerOperation(Tags = new[] { "Contacts" })]
  public async Task<IActionResult> AddMessageAsync(BasicMessageModel model)
  {
    var newMessage = model.ToEntity(Request.HttpContext.Connection.RemoteIpAddress?.ToString() ?? "");
    var message = _messageService.AddAndSave(newMessage);
    var mail = _mailClient.PrepareMessage(new EmailModel("contact-us@fosol.ca", "support@fosol.ca", "Contact Us", $"<div><p>{model.Name}</p><p>{model.Company}</p><p>{model.Email}</p><p>{model.Phone}</p><p>{model.Text}</p></div>"));
    await _mailClient.SendAsync(mail);
    return StatusCode(201, new BasicMessageModel(message));
  }
  #endregion
}
