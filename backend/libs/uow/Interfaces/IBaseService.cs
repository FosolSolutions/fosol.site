using System.Security.Claims;

namespace Fosol.Site.UoW;

/// <summary>
/// 
/// </summary>
public interface IBaseService
{
  /// <summary>
  /// 
  /// </summary>
  ClaimsPrincipal Principal { get; }

  /// <summary>
  /// 
  /// </summary>
  IServiceProvider Services { get; }
}
