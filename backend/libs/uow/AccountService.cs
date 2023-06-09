using System.Security.Claims;
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
public class AccountService : BaseService<Account, int>, IAccountService
{
  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  public AccountService(SiteContext dbContext, ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService<Account, int>> logger) : base(dbContext, principal, serviceProvider, logger)
  {
  }
  #endregion

  #region Methods
  /// <summary>
  /// 
  /// </summary>
  /// <param name="filter"></param>
  /// <returns></returns>
  public override Paging<Account> Find(PageFilter filter)
  {
    var values = (AccountFilter)filter;
    var query = this.Context.Set<Account>().AsQueryable();

    if (!String.IsNullOrWhiteSpace(values.Name))
      query = query.Where(i => EF.Functions.Like(nameof(Account.Name), $"%{values.Name}%"));

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

    return new Paging<Account>(filter, items, total);
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="key"></param>
  /// <returns></returns>
  public Account? FindByKey(Guid key)
  {
    return this.Context.Accounts
      .FirstOrDefault(u => u.Key == key);
  }
  #endregion
}
