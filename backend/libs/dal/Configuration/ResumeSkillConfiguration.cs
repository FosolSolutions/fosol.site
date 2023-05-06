namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;
using Microsoft.EntityFrameworkCore;

public class ResumeSkillConfiguration : AuditableConfiguration<ResumeSkill>
{
  public override void Configure(EntityTypeBuilder<ResumeSkill> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.ResumeId).IsRequired();
    builder.Property(m => m.Name).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Level).IsRequired();
    builder.Property(m => m.Description).IsRequired().HasMaxLength(500);

    builder.HasOne(m => m.Resume).WithMany(m => m.Skills).HasForeignKey(m => m.ResumeId).OnDelete(DeleteBehavior.Cascade);

    builder.HasIndex(m => new { m.Name, m.Level }, "IX_resume_skill");

    base.Configure(builder);
  }
}
