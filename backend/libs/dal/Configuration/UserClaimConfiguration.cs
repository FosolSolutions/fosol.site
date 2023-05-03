namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;
using Microsoft.EntityFrameworkCore;

public class UserClaimConfiguration : AuditableConfiguration<UserClaim>
{
  public override void Configure(EntityTypeBuilder<UserClaim> builder)
  {
    builder.HasKey(m => new { m.UserId, m.AccountId, m.Name, m.Value });
    builder.Property(m => m.UserId).IsRequired().ValueGeneratedNever();
    builder.Property(m => m.AccountId).IsRequired().ValueGeneratedNever();
    builder.Property(m => m.Name).IsRequired().HasMaxLength(50).ValueGeneratedNever();
    builder.Property(m => m.Value).IsRequired().HasMaxLength(250).ValueGeneratedNever();

    builder.HasOne(m => m.User).WithMany(m => m.Claims).HasForeignKey(m => m.UserId).OnDelete(DeleteBehavior.Cascade);
    builder.HasOne(m => m.Account).WithMany(m => m.UserClaims).HasForeignKey(m => m.AccountId).OnDelete(DeleteBehavior.Cascade);

    base.Configure(builder);
  }
}
