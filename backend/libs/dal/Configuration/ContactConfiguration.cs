namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class ContactConfiguration : AuditableConfiguration<Contact>
{
  public override void Configure(EntityTypeBuilder<Contact> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.DisplayName).IsRequired().HasMaxLength(500);
    builder.Property(m => m.FirstName).IsRequired();
    builder.Property(m => m.LastName).IsRequired();
    builder.Property(m => m.Email).IsRequired().HasMaxLength(250);
    builder.Property(m => m.Phone).IsRequired().HasMaxLength(15);
    builder.Property(m => m.Note).IsRequired().HasColumnType("text");

    builder.HasIndex(m => new { m.Email, m.DisplayName }, "IX_contact");

    base.Configure(builder);
  }
}
