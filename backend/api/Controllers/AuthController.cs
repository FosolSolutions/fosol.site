using System.Net.Mime;
using System.Security.Claims;
using Fosol.Site.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Fosol.Site.Api.Controllers;

/// <summary>
/// AuthController class, provides a controller for authentication endpoints.
/// </summary>
[ApiController]
[ApiVersion("1.0")]
[Route("v{version:apiVersion}/[controller]")]
public class AuthController : ControllerBase
{
  #region Variables
  private readonly ILogger<AuthController> _logger;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a AuthController object.
  /// </summary>
  /// <param name="logger"></param>
  public AuthController(ILogger<AuthController> logger)
  {
    _logger = logger;
  }
  #endregion

  #region Endpoints
  /// <summary>
  /// Returns the current user's information.
  /// </summary>
  /// <returns></returns>
  [HttpGet("userinfo", Name = "GetUserInfo")]
  [Produces(MediaTypeNames.Application.Json)]
  [ProducesResponseType(typeof(UserInfoModel), 200)]
  [SwaggerOperation(Tags = new[] { "Auth" })]
  public IActionResult GetUserInfo()
  {
    var user = this.User.Identity as ClaimsPrincipal;
    return new JsonResult(new UserInfoModel(user));
  }
  #endregion
}
