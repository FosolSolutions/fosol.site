using System.Net.Mime;
using System.Security.Claims;
using Fosol.Site.Models;
using Fosol.Site.Models.Contacts.Messages;
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
public class ContactMessageController : ControllerBase
{
  #region Variables
  private readonly ILogger<ContactMessageController> _logger;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a ContactMessageController object.
  /// </summary>
  /// <param name="logger"></param>
  public ContactMessageController(ILogger<ContactMessageController> logger)
  {
    _logger = logger;
  }
  #endregion

  #region Endpoints
  /// <summary>
  /// Submit a new message from a contact.
  /// </summary>
  /// <returns></returns>
  [HttpPost(Name = "AddMessage")]
  [Produces(MediaTypeNames.Application.Json)]
  [ProducesResponseType(typeof(ContactMessageModel), 201)]
  [SwaggerOperation(Tags = new[] { "Contacts" })]
  public IActionResult AddMessage()
  {
    var user = this.User.Identity as ClaimsPrincipal;
    return new JsonResult(new UserInfoModel(user));
  }
  #endregion
}
