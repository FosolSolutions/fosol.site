namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class ContactMessageConfiguration : AuditableConfiguration<ContactMessage>
{
  public override void Configure(EntityTypeBuilder<ContactMessage> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.ContactId).IsRequired();
    builder.Property(m => m.Status).IsRequired();
    builder.Property(m => m.Text).IsRequired().HasColumnType("text");

    builder.HasOne(m => m.Contact).WithMany(m => m.Messages).HasForeignKey(m => m.ContactId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.Status }, "IX_contact_message");

    base.Configure(builder);
  }
}
