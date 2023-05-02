namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class RoleConfiguration : SortableAuditableConfiguration<Role, int>
{
  public override void Configure(EntityTypeBuilder<Role> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.Key).IsRequired().HasDefaultValueSql("uuid_generate_v1()");
    builder.Property(m => m.AccountId).IsRequired();

    builder.HasOne(m => m.Account).WithMany(m => m.Roles).HasForeignKey(m => m.AccountId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.IsEnabled }, "IX_role");
    builder.HasIndex(m => new { m.AccountId, m.Name }, "IX_role_name").IsUnique();
    builder.HasIndex(m => m.Key, "IX_role_key").IsUnique();

    base.Configure(builder);
  }
}
