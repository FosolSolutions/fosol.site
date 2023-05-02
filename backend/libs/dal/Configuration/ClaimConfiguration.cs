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

    builder.HasOne(m => m.Account).WithMany(m => m.Claims).HasForeignKey(m => m.AccountId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.IsEnabled }, "IX_claim");
    builder.HasIndex(m => new { m.AccountId, m.Name }, "IX_claim_name").IsUnique();

    base.Configure(builder);
  }
}
