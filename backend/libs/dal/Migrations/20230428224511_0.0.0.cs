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
          name: "contact",
          columns: table => new
          {
            id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            display_name = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
            first_name = table.Column<string>(type: "text", nullable: false),
            last_name = table.Column<string>(type: "text", nullable: false),
            company = table.Column<string>(type: "text", nullable: false),
            email = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
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
          name: "contact_message",
          columns: table => new
          {
            id = table.Column<int>(type: "integer", nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            contact_id = table.Column<int>(type: "integer", nullable: false),
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
            table.PrimaryKey("PK_contact_message", x => x.id);
            table.ForeignKey(
                      name: "FK_contact_message_contact_contact_id",
                      column: x => x.contact_id,
                      principalTable: "contact",
                      principalColumn: "id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateIndex(
          name: "IX_contact",
          table: "contact",
          columns: new[] { "email", "display_name" });

      migrationBuilder.CreateIndex(
          name: "IX_contact_message",
          table: "contact_message",
          column: "status");

      migrationBuilder.CreateIndex(
          name: "IX_contact_message_contact_id",
          table: "contact_message",
          column: "contact_id");
      PostUp(migrationBuilder);
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
      PreDown(migrationBuilder);
      migrationBuilder.DropTable(
          name: "contact_message");

      migrationBuilder.DropTable(
          name: "contact");
      PostDown(migrationBuilder);
    }
  }
}
