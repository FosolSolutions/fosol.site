namespace Fosol.Site.Dal.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Fosol.Site.Entities;

public class UserConfiguration : AuditableConfiguration<User>
{
  public override void Configure(EntityTypeBuilder<User> builder)
  {
    builder.HasKey(m => m.Id);
    builder.Property(m => m.Id).IsRequired().ValueGeneratedOnAdd();
    builder.Property(m => m.Username).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Email).IsRequired().HasMaxLength(100);
    builder.Property(m => m.EmailVerified).IsRequired();
    builder.Property(m => m.EmailVerifiedOn);
    builder.Property(m => m.Key).IsRequired().HasDefaultValueSql("uuid_generate_v1()");
    builder.Property(m => m.Password).IsRequired().HasMaxLength(250);
    builder.Property(m => m.DisplayName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.FirstName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.MiddleName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.LastName).IsRequired().HasMaxLength(50);
    builder.Property(m => m.Phone).IsRequired().HasMaxLength(15);
    builder.Property(m => m.IsEnabled).IsRequired();
    builder.Property(m => m.FailedLogins).IsRequired().HasDefaultValueSql("0");
    builder.Property(m => m.Gender);
    builder.Property(m => m.UserType).IsRequired();
    builder.Property(m => m.Status).IsRequired();
    builder.Property(m => m.LastLoginOn);

    builder.HasMany(m => m.Accounts).WithMany(m => m.Users).UsingEntity<UserAccount>();
    builder.HasMany(m => m.Roles).WithMany(m => m.Users).UsingEntity<UserRole>();

    builder.HasIndex(m => m.Username, "IX_user_username").IsUnique();
    builder.HasIndex(m => m.DisplayName, "IX_user_display_name").IsUnique();
    builder.HasIndex(m => m.Key, "IX_user_key").IsUnique();
    builder.HasIndex(m => new { m.Status, m.UserType, m.Email, m.Phone, m.LastName, m.FirstName });

    base.Configure(builder);
  }
}
