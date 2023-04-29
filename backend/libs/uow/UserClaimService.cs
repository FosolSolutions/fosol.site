using Fosol.Site.Dal;
using Fosol.Site.Dal.Extensions;
using Fosol.Site.Entities;
using Fosol.Site.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Fosol.Site.UoW;

/// <summary>
/// 
/// </summary>
public class UserClaimService : BaseService<UserClaim, (long UserId, int AccountId, string Name, string Value)>, IUserClaimService
{
  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  public UserClaimService(SiteContext dbContext, System.Security.Claims.ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService<UserClaim, (long UserId, int AccountId, string Name, string Value)>> logger) : base(dbContext, principal, serviceProvider, logger)
  {
  }
  #endregion

  #region Methods
  /// <summary>
  /// 
  /// </summary>
  /// <param name="filter"></param>
  /// <returns></returns>
  public override Paging<UserClaim> Find(PageFilter filter)
  {
    var values = (UserClaimFilter)filter;
    var query = this.Context.Set<UserClaim>().AsQueryable();

    if (!String.IsNullOrWhiteSpace(values.Name))
      query = query.Where(i => EF.Functions.Like(nameof(Claim.Name), $"%{values.Name}%"));

    if (values.UserId.HasValue)
      query = query.Where(i => i.UserId == values.UserId.Value);

    if (values.AccountId.HasValue)
      query = query.Where(i => i.AccountId == values.AccountId.Value);

    var total = query.Count();

    if (filter.Sort?.Any() == true)
      query = query.OrderByProperty(filter.Sort);
    else
      query = query.OrderBy(i => i.Name);

    var items = query
      .AsNoTracking()
      .Skip(filter.Skip)
      .Take(filter.Quantity)
      .ToArray();

    return new Paging<UserClaim>(filter, items, total);
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="userId"></param>
  /// <returns></returns>
  public IEnumerable<UserClaim> FindByUser(long userId)
  {
    return this.Context.UserClaims
      .AsNoTracking()
      .Where(u => u.UserId == userId)
      .ToArray();
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="accountId"></param>
  /// <returns></returns>
  public IEnumerable<UserClaim> FindByAccount(int accountId)
  {
    return this.Context.UserClaims
      .AsNoTracking()
      .Where(u => u.AccountId == accountId)
      .ToArray();
  }
  #endregion
}
