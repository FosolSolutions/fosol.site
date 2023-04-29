using System.Security.Claims;
using Fosol.Site.Dal;
using Microsoft.Extensions.Logging;

namespace Fosol.Site.UoW;

/// <summary>
/// 
/// </summary>
public abstract class BaseService : IBaseService
{
  #region Properties

  /// <summary>
  /// get - The datasource context object.
  /// </summary>
  protected SiteContext Context { get; }

  /// <summary>
  /// 
  /// </summary>
  public ClaimsPrincipal Principal { get; }

  /// <summary>
  /// 
  /// </summary>
  public IServiceProvider Services { get; }

  /// <summary>
  /// get - The logger.
  /// </summary>
  protected ILogger<BaseService> Logger { get; }
  #endregion

  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  /// <exception cref="ArgumentNullException"></exception>
  public BaseService(SiteContext dbContext, ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService> logger)
  {
    this.Context = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
    this.Principal = principal ?? throw new ArgumentNullException(nameof(principal));
    this.Services = serviceProvider ?? throw new ArgumentNullException(nameof(serviceProvider));
    this.Logger = logger ?? throw new ArgumentNullException(nameof(logger));
  }
  #endregion

  #region Methods
  #endregion
}
