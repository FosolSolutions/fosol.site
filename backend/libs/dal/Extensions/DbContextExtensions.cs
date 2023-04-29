using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Fosol.Core.Extensions;
using Fosol.Site.Entities;

namespace Fosol.Site.Dal.Extensions;

/// <summary>
/// DbContextExtensions static class, provides extension methods for DbContext objects.
/// </summary>
public static class DbContextExtensions
{
  /// <summary>
  /// If you use the DbContext.Entry(entity).CurrentValues.SetValues(values) it will break concurrency handling.
  /// You must reset the entity Version to enable the concurrency check.
  /// </summary>
  /// <typeparam name="T"></typeparam>
  /// <param name="context"></param>
  /// <param name="entity"></param>
  /// <returns></returns>
  public static SiteContext ResetVersion<T>(this SiteContext context, T entity)
      where T : Auditable
  {
    context.Entry(entity).OriginalValues[nameof(Auditable.Version)] = entity.Version;
    return context;
  }

  /// <summary>
  /// When updating an entity make sure the created values are not changed.
  /// If required fetch the entity from the database to get the original values.
  /// </summary>
  /// <param name="context"></param>
  /// <param name="entry"></param>
  /// <param name="user"></param>
  /// <returns></returns>
  /// <exception cref="ArgumentException"></exception>
  public static SiteContext OnUpdate(this SiteContext context, EntityEntry entry, ClaimsPrincipal? user)
  {
    var entity = entry.Entity as Auditable ?? throw new ArgumentException("Must be an entity that extends Auditable");
    var type = entry.Entity.GetType();

    string createdBy;
    DateTimeOffset createdOn;
    if (entry.State == EntityState.Detached)
    {
      // Make a request to the database for the original.
      string[] keys = context.Model?.FindEntityType(type)?.FindPrimaryKey()?.Properties.Select(x => x.Name).ToArray() ?? Array.Empty<string>();
      object?[] values = keys.Select(k => type.GetProperty(k)!.GetValue(entity, null)).Where(v => v != null).ToArray();
      var original = (Auditable?)context.Find(type, values);
      createdBy = original?.CreatedBy ?? entity.CreatedBy;
      createdOn = original?.CreatedOn ?? entity.CreatedOn;
    }
    else
    {
      // These values will never be correct unless you first load the entity before updating it.
      createdBy = entry.GetOriginalValue(nameof(Auditable.CreatedBy), "");
      createdOn = entry.GetOriginalValue(nameof(Auditable.CreatedOn), DateTimeOffset.UtcNow);
    }

    entity.CreatedBy = createdBy;
    entity.CreatedOn = createdOn;
    entity.UpdatedBy = user?.GetUsername() ?? "";
    entity.UpdatedOn = DateTimeOffset.UtcNow;
    return context;
  }
}
