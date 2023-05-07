using Fosol.Site.Dal;
using Fosol.Site.Entities;
using Microsoft.Extensions.Logging;

namespace Fosol.Site.UoW;

/// <summary>
/// 
/// </summary>
public class ResumeService : BaseService<Resume, int>, IResumeService
{
  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  public ResumeService(SiteContext dbContext, System.Security.Claims.ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService<Resume, int>> logger)
    : base(dbContext, principal, serviceProvider, logger)
  {
  }
  #endregion

  #region Methods
  #endregion
}
