namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class AccountConfiguration : CommonAuditableConfiguration<Account, int>
{
  public override void Configure(EntityTypeBuilder<Account> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.Key).IsRequired().HasDefaultValueSql("uuid_generate_v1()");
    builder.Property(m => m.AccountType).IsRequired();
    builder.Property(m => m.OwnerId).IsRequired();

    builder.HasOne(m => m.Owner).WithMany(m => m.OwnedAccounts).HasForeignKey(m => m.OwnerId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.IsEnabled }, "IX_account");
    builder.HasIndex(m => m.Name, "IX_account_name").IsUnique();
    builder.HasIndex(m => m.Key, "IX_account_key").IsUnique();

    base.Configure(builder);
  }
}
