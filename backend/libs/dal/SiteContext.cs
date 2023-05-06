using Microsoft.EntityFrameworkCore;
using Fosol.Site.Entities;
using Microsoft.AspNetCore.Http;
using System.Text.Json;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using System.Text;
using Fosol.Site.Core.Extensions;
using Fosol.Core.Extensions;
using Fosol.Site.Dal.Configuration;

namespace Fosol.Site.Dal;

public class SiteContext : DbContext
{
  #region Variables
  private readonly ILogger? _logger;
  private readonly IHttpContextAccessor? _httpContextAccessor;
  private readonly JsonSerializerOptions? _serializerOptions;
  #endregion

  #region Properties
  public DbSet<Contact> Contacts => Set<Contact>();
  public DbSet<BasicMessage> BasicMessages => Set<BasicMessage>();
  public DbSet<Account> Accounts => Set<Account>();
  public DbSet<Claim> Claims => Set<Claim>();
  public DbSet<Role> Roles => Set<Role>();
  public DbSet<RoleClaim> RoleClaims => Set<RoleClaim>();
  public DbSet<User> Users => Set<User>();
  public DbSet<UserClaim> UserClaims => Set<UserClaim>();
  public DbSet<UserAccount> UserAccounts => Set<UserAccount>();
  public DbSet<UserRole> UserRoles => Set<UserRole>();
  public DbSet<Resume> Resumes => Set<Resume>();
  public DbSet<ResumeSkill> ResumeSkills => Set<ResumeSkill>();
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a SiteContext object, initializes with specified parameters.
  /// </summary>
  /// <param name="logger"></param>
  protected SiteContext(ILogger<SiteContext> logger)
  {
    _logger = logger;
  }

  /// <summary>
  /// Creates a new instance of a SiteContext object, initializes with specified parameters.
  /// </summary>
  /// <param name="options"></param>
  /// <param name="httpContextAccessor"></param>
  /// <param name="serializerOptions"></param>
  /// <param name="logger"></param>
  public SiteContext(DbContextOptions<SiteContext> options, IHttpContextAccessor? httpContextAccessor = null, IOptions<JsonSerializerOptions>? serializerOptions = null, ILogger<SiteContext>? logger = null)
    : base(options)
  {
    _logger = logger;
    _httpContextAccessor = httpContextAccessor;
    _serializerOptions = serializerOptions?.Value;
  }
  #endregion

  #region Methods

  /// <summary>
  /// Configures the DbContext with the specified options.
  /// </summary>
  /// <param name="optionsBuilder"></param>
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    if (!optionsBuilder.IsConfigured)
    {
      optionsBuilder.EnableSensitiveDataLogging();
    }

    base.OnConfiguring(optionsBuilder);
  }

  /// <summary>
  /// Apply all the configuration settings to the model.
  /// </summary>
  /// <param name="modelBuilder"></param>
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.ApplyAllConfigurations(typeof(AuditableConfiguration<>), this);
  }

  /// <summary>
  /// Save the entities with who created them or updated them.
  /// </summary>
  /// <returns></returns>
  public override int SaveChanges()
  {
    // get entries that are being Added or Updated
    var modifiedEntries = ChangeTracker.Entries()
            .Where(x => x.State == EntityState.Added || x.State == EntityState.Modified);

    var user = _httpContextAccessor?.HttpContext?.User;
    foreach (var entry in modifiedEntries)
    {
      if (entry.Entity is Auditable entity)
      {
        if (entry.State == EntityState.Added)
        {
          entity.CreatedBy = user?.GetUsername() ?? "";
        }
        else if (entry.State != EntityState.Deleted)
        {
          entity.UpdatedBy = user?.GetUsername() ?? "";
          entity.UpdatedOn = new DateTimeOffset();
        }
      }
    }

    return base.SaveChanges();
  }

  /// <summary>
  /// Wrap the save changes in a transaction for rollback.
  /// </summary>
  /// <returns></returns>
  public int CommitTransaction()
  {
    using var transaction = Database.BeginTransaction();
    try
    {
      var result = SaveChanges();
      transaction.Commit();
      return result;
    }
    catch (DbUpdateConcurrencyException ex)
    {
      foreach (var entry in ex.Entries)
      {
        var metadataName = entry.Metadata.Name;
        var dbValues = entry.GetDatabaseValues();
        var currentValues = entry.CurrentValues;
        var originalValues = entry.OriginalValues;
        var sb = new StringBuilder();

        foreach (var property in currentValues.Properties)
        {
          var dbValue = dbValues?[property];
          var currentValue = currentValues[property];
          var originalValue = originalValues[property];

          if (dbValue?.ToString() != originalValue?.ToString() ||
              dbValue?.ToString() != currentValue?.ToString())
          {
            sb.Append($"[{property.Name} - Current: {currentValue}; DB: {dbValue}; Original: {originalValue}]");
          }
        }

        _logger?.LogError("{metadataName}: {sb}", metadataName, sb);
      }
      throw;
    }
    catch (DbUpdateException)
    {
      transaction.Rollback();
      throw;
    }
  }

  /// <summary>
  /// Deserialize the specified 'json' to the specified type of 'T'.
  /// </summary>
  /// <typeparam name="T"></typeparam>
  /// <param name="json"></param>
  /// <returns></returns>
  public T? Deserialize<T>(string json)
  {
    return JsonSerializer.Deserialize<T>(json, _serializerOptions);
  }

  /// <summary>
  /// Serialize the specified 'item'.
  /// </summary>
  /// <typeparam name="T"></typeparam>
  /// <param name="item"></param>
  /// <returns></returns>
  public string Serialize<T>(T item)
  {
    return JsonSerializer.Serialize(item, _serializerOptions);
  }
  #endregion
}
