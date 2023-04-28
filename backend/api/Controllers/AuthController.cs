using System.Net.Mime;
using System.Security.Claims;
using Fosol.Site.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Fosol.Site.Api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("[controller]")]
[Route("v{version:apiVersion}/[controller]")]
public class AuthController : ControllerBase
{
  #region Variables
  private readonly ILogger<AuthController> _logger;
  #endregion

  #region Constructors
  public AuthController(ILogger<AuthController> logger)
  {
    _logger = logger;
  }
  #endregion

  #region Endpoints
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
