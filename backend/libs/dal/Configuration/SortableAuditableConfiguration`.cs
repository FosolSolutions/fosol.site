namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class SortableAuditableConfiguration<TEntity, TKey> : CommonAuditableConfiguration<TEntity, TKey>
  where TEntity : SortableAuditable<TKey>
  where TKey : notnull
{
  public override void Configure(EntityTypeBuilder<TEntity> builder)
  {
    builder.Property(m => m.SortOrder).IsRequired();

    base.Configure(builder);
  }
}
