namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class ContactMessageConfiguration : AuditableConfiguration<BasicMessage>
{
  public override void Configure(EntityTypeBuilder<BasicMessage> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.IpAddress).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Name).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Company).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Email).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Phone).IsRequired().HasMaxLength(15);
    builder.Property(m => m.Status).IsRequired();
    builder.Property(m => m.Text).IsRequired().HasColumnType("text");

    builder.HasIndex(m => new { m.Name, m.Company, m.Email, m.Phone, m.Status }, "IX_basic_message");

    base.Configure(builder);
  }
}
