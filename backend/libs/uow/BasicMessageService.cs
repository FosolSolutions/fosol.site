using Fosol.Site.Dal;
using Fosol.Site.Entities;
using Microsoft.Extensions.Logging;

namespace Fosol.Site.UoW;

/// <summary>
/// 
/// </summary>
public class BasicMessageService : BaseService<BasicMessage, int>, IBasicMessageService
{
  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  public BasicMessageService(SiteContext dbContext, System.Security.Claims.ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService<BasicMessage, int>> logger)
    : base(dbContext, principal, serviceProvider, logger)
  {
  }
  #endregion

  #region Methods
  #endregion
}
