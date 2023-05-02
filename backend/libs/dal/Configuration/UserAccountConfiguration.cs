namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;
using Microsoft.EntityFrameworkCore;

public class UserAccountConfiguration : AuditableConfiguration<UserAccount>
{
  public override void Configure(EntityTypeBuilder<UserAccount> builder)
  {
    builder.HasKey(m => new { m.UserId, m.AccountId });
    builder.Property(m => m.UserId).IsRequired().ValueGeneratedNever();
    builder.Property(m => m.AccountId).IsRequired().ValueGeneratedNever();

    builder.HasOne(m => m.User).WithMany(m => m.AccountsManyToMany).HasForeignKey(m => m.UserId).OnDelete(DeleteBehavior.Cascade);
    builder.HasOne(m => m.Account).WithMany(m => m.UsersManyToMany).HasForeignKey(m => m.AccountId).OnDelete(DeleteBehavior.Cascade);

    base.Configure(builder);
  }
}
