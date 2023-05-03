namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class ClaimConfiguration : SortableAuditableConfiguration<Claim, int>
{
  public override void Configure(EntityTypeBuilder<Claim> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.AccountId).IsRequired();
    builder.Property(m => m.Value).IsRequired().HasMaxLength(250);

    builder.HasOne(m => m.Account).WithMany(m => m.Claims).HasForeignKey(m => m.AccountId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.IsEnabled }, "IX_claim");
    builder.HasIndex(m => new { m.AccountId, m.Name, m.Value }, "IX_claim_name_value").IsUnique();

    base.Configure(builder);
  }
}
