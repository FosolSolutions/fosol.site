using System.Security.Claims;

namespace Fosol.Site.Models;

public class UserInfoModel
{
  #region Properties
  public string? Name { get; set; }
  #endregion

  #region Constructors
  public UserInfoModel(ClaimsPrincipal? user)
  {
    this.Name = user?.Identity?.Name;
  }
  #endregion
}
