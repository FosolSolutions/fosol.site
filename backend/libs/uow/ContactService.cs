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
public class ContactService : BaseService<Contact, long>, IContactService
{
  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="dbContext"></param>
  /// <param name="principal"></param>
  /// <param name="serviceProvider"></param>
  /// <param name="logger"></param>
  public ContactService(SiteContext dbContext, System.Security.Claims.ClaimsPrincipal principal, IServiceProvider serviceProvider, ILogger<BaseService<Contact, long>> logger) : base(dbContext, principal, serviceProvider, logger)
  {
  }
  #endregion

  #region Methods
  /// <summary>
  /// 
  /// </summary>
  /// <param name="filter"></param>
  /// <returns></returns>
  public override Paging<Contact> Find(PageFilter filter)
  {
    var values = (ContactFilter)filter;
    var query = this.Context.Set<Contact>().AsQueryable();

    if (!String.IsNullOrWhiteSpace(values.DisplayName))
      query = query.Where(i => EF.Functions.Like(nameof(Contact.DisplayName), $"%{values.DisplayName}%"));

    var total = query.Count();

    if (filter.Sort?.Any() == true)
      query = query.OrderByProperty(filter.Sort);
    else
      query = query.OrderBy(i => i.DisplayName);

    var items = query
      .AsNoTracking()
      .Skip(filter.Skip)
      .Take(filter.Quantity)
      .ToArray();

    return new Paging<Contact>(filter, items, total);
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="name"></param>
  /// <returns></returns>
  public IEnumerable<Contact> FindByDisplayName(string name)
  {
    return this.Context.Contacts
      .AsNoTracking()
      .Where(u => EF.Functions.Like(nameof(Contact.DisplayName), $"%{name}%"))
      .ToArray();
  }
  #endregion
}
