using System;
using Fosol.Site.Dal;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Fosol.Site.Dal.Migrations
{
  /// <inheritdoc />
  public partial class _000 : PostgresSeedMigration
  {
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      PreUp(migrationBuilder);
      migrationBuilder.CreateTable(
          name: "basic_message",
          columns: table => new
          {
            id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            company = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            phone = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false),
            status = table.Column<int>(type: "integer", nullable: false),
            text = table.Column<string>(type: "text", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_basic_message", x => x.id);
          });

      migrationBuilder.CreateTable(
          name: "contact",
          columns: table => new
          {
            id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            display_name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            first_name = table.Column<string>(type: "text", nullable: false),
            last_name = table.Column<string>(type: "text", nullable: false),
            company = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            phone = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false),
            note = table.Column<string>(type: "text", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_contact", x => x.id);
          });

      migrationBuilder.CreateTable(
          name: "Users",
          columns: table => new
          {
            Id = table.Column<long>(type: "bigint", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            Username = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
            EmailVerified = table.Column<bool>(type: "boolean", nullable: false),
            EmailVerifiedOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
            Key = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "uuid_generate_v1()"),
            Password = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            DisplayName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            FirstName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            MiddleName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            LastName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Phone = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false),
            IsEnabled = table.Column<bool>(type: "boolean", nullable: false),
            FailedLogins = table.Column<int>(type: "integer", nullable: false, defaultValueSql: "0"),
            Gender = table.Column<int>(type: "integer", nullable: true),
            UserType = table.Column<int>(type: "integer", nullable: false),
            Status = table.Column<int>(type: "integer", nullable: false),
            LastLoginOn = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Users", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "Accounts",
          columns: table => new
          {
            Id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            Key = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "uuid_generate_v1()"),
            AccountType = table.Column<int>(type: "integer", nullable: false),
            OwnerId = table.Column<long>(type: "bigint", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0"),
            Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
            IsEnabled = table.Column<bool>(type: "boolean", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Accounts", x => x.Id);
            table.ForeignKey(
                      name: "FK_Accounts_Users_OwnerId",
                      column: x => x.OwnerId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "Claims",
          columns: table => new
          {
            Id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            AccountId = table.Column<int>(type: "integer", nullable: false),
            Value = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0"),
            Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
            IsEnabled = table.Column<bool>(type: "boolean", nullable: false),
            SortOrder = table.Column<int>(type: "integer", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Claims", x => x.Id);
            table.ForeignKey(
                      name: "FK_Claims_Accounts_AccountId",
                      column: x => x.AccountId,
                      principalTable: "Accounts",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "Roles",
          columns: table => new
          {
            Id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            Key = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "uuid_generate_v1()"),
            AccountId = table.Column<int>(type: "integer", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0"),
            Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
            IsEnabled = table.Column<bool>(type: "boolean", nullable: false),
            SortOrder = table.Column<int>(type: "integer", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Roles", x => x.Id);
            table.ForeignKey(
                      name: "FK_Roles_Accounts_AccountId",
                      column: x => x.AccountId,
                      principalTable: "Accounts",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "UserAccounts",
          columns: table => new
          {
            UserId = table.Column<long>(type: "bigint", nullable: false),
            AccountId = table.Column<int>(type: "integer", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_UserAccounts", x => new { x.UserId, x.AccountId });
            table.ForeignKey(
                      name: "FK_UserAccounts_Accounts_AccountId",
                      column: x => x.AccountId,
                      principalTable: "Accounts",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_UserAccounts_Users_UserId",
                      column: x => x.UserId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "UserClaims",
          columns: table => new
          {
            UserId = table.Column<long>(type: "bigint", nullable: false),
            AccountId = table.Column<int>(type: "integer", nullable: false),
            Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
            Value = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_UserClaims", x => new { x.UserId, x.AccountId, x.Name, x.Value });
            table.ForeignKey(
                      name: "FK_UserClaims_Accounts_AccountId",
                      column: x => x.AccountId,
                      principalTable: "Accounts",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_UserClaims_Users_UserId",
                      column: x => x.UserId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "RoleClaims",
          columns: table => new
          {
            RoleId = table.Column<int>(type: "integer", nullable: false),
            ClaimId = table.Column<int>(type: "integer", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_RoleClaims", x => new { x.RoleId, x.ClaimId });
            table.ForeignKey(
                      name: "FK_RoleClaims_Claims_ClaimId",
                      column: x => x.ClaimId,
                      principalTable: "Claims",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_RoleClaims_Roles_RoleId",
                      column: x => x.RoleId,
                      principalTable: "Roles",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "UserRoles",
          columns: table => new
          {
            UserId = table.Column<long>(type: "bigint", nullable: false),
            RoleId = table.Column<int>(type: "integer", nullable: false),
            CreatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            CreatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            UpdatedBy = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
            UpdatedOn = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP"),
            Version = table.Column<long>(type: "bigint", nullable: false, defaultValueSql: "0")
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
            table.ForeignKey(
                      name: "FK_UserRoles_Roles_RoleId",
                      column: x => x.RoleId,
                      principalTable: "Roles",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_UserRoles_Users_UserId",
                      column: x => x.UserId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateIndex(
          name: "IX_account",
          table: "Accounts",
          column: "IsEnabled");

      migrationBuilder.CreateIndex(
          name: "IX_account_key",
          table: "Accounts",
          column: "Key",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_account_name",
          table: "Accounts",
          column: "Name",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_Accounts_OwnerId",
          table: "Accounts",
          column: "OwnerId");

      migrationBuilder.CreateIndex(
          name: "IX_basic_message",
          table: "basic_message",
          columns: new[] { "name", "company", "email", "phone", "status" });

      migrationBuilder.CreateIndex(
          name: "IX_claim",
          table: "Claims",
          column: "IsEnabled");

      migrationBuilder.CreateIndex(
          name: "IX_claim_name_value",
          table: "Claims",
          columns: new[] { "AccountId", "Name", "Value" },
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_contact",
          table: "contact",
          columns: new[] { "email", "display_name" });

      migrationBuilder.CreateIndex(
          name: "IX_RoleClaims_ClaimId",
          table: "RoleClaims",
          column: "ClaimId");

      migrationBuilder.CreateIndex(
          name: "IX_role",
          table: "Roles",
          column: "IsEnabled");

      migrationBuilder.CreateIndex(
          name: "IX_role_key",
          table: "Roles",
          column: "Key",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_role_name",
          table: "Roles",
          columns: new[] { "AccountId", "Name" },
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_UserAccounts_AccountId",
          table: "UserAccounts",
          column: "AccountId");

      migrationBuilder.CreateIndex(
          name: "IX_UserClaims_AccountId",
          table: "UserClaims",
          column: "AccountId");

      migrationBuilder.CreateIndex(
          name: "IX_UserRoles_RoleId",
          table: "UserRoles",
          column: "RoleId");

      migrationBuilder.CreateIndex(
          name: "IX_user_display_name",
          table: "Users",
          column: "DisplayName",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_user_key",
          table: "Users",
          column: "Key",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_user_username",
          table: "Users",
          column: "Username",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_Users_Status_UserType_Email_Phone_LastName_FirstName",
          table: "Users",
          columns: new[] { "Status", "UserType", "Email", "Phone", "LastName", "FirstName" });
      PostUp(migrationBuilder);
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
      PreDown(migrationBuilder);
      migrationBuilder.DropTable(
          name: "basic_message");

      migrationBuilder.DropTable(
          name: "contact");

      migrationBuilder.DropTable(
          name: "RoleClaims");

      migrationBuilder.DropTable(
          name: "UserAccounts");

      migrationBuilder.DropTable(
          name: "UserClaims");

      migrationBuilder.DropTable(
          name: "UserRoles");

      migrationBuilder.DropTable(
          name: "Claims");

      migrationBuilder.DropTable(
          name: "Roles");

      migrationBuilder.DropTable(
          name: "Accounts");

      migrationBuilder.DropTable(
          name: "Users");
      PostDown(migrationBuilder);
    }
  }
}
