using System.Net.Mime;
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
[Route("v{version:apiVersion}/messages")]
public class BasicMessageController : ControllerBase
{
  #region Variables
  private readonly IBasicMessageService _messageService;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a BasicMessageController object.
  /// </summary>
  /// <param name="messageService"></param>
  public BasicMessageController(IBasicMessageService messageService)
  {
    _messageService = messageService;
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
  public IActionResult AddMessage(BasicMessageModel model)
  {
    var message = _messageService.AddAndSave(model.ToEntity());
    return new JsonResult(new BasicMessageModel(message));
  }
  #endregion
}
