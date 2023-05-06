namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class ResumeConfiguration : AuditableConfiguration<Resume>
{
  public override void Configure(EntityTypeBuilder<Resume> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.FirstName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.LastName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Email).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Phone).IsRequired().HasMaxLength(15);
    builder.Property(m => m.Position).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Employment).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Company).IsRequired().HasMaxLength(100);
    builder.Property(m => m.Address).IsRequired().HasMaxLength(50);
    builder.Property(m => m.City).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Region).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Country).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Postal).IsRequired().HasMaxLength(25);
    builder.Property(m => m.Description).IsRequired().HasColumnType("text");
    builder.Property(m => m.Salary).IsRequired().HasMaxLength(100);
    builder.Property(m => m.FilePath).IsRequired().HasMaxLength(500);

    builder.HasIndex(m => new { m.Email, m.FirstName, m.LastName, m.Position }, "IX_resume");

    base.Configure(builder);
  }
}
