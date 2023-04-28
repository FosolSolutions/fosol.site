namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public abstract class AuditableConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : Auditable
{
  public virtual void Configure(EntityTypeBuilder<TEntity> builder)
  {
    builder.Property(m => m.CreatedBy).IsRequired().HasMaxLength(250);
    builder.Property(m => m.CreatedOn).IsRequired().HasDefaultValueSql("CURRENT_TIMESTAMP");
    builder.Property(m => m.UpdatedBy).IsRequired().HasMaxLength(250);
    builder.Property(m => m.UpdatedOn).IsRequired().HasDefaultValueSql("CURRENT_TIMESTAMP");
    builder.Property(m => m.Version).IsConcurrencyToken().HasDefaultValueSql("0");
  }
}
