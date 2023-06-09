namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public class User : Auditable
{
  #region Properties
  /// <summary>
  /// 
  /// </summary>
  public long Id { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public string Username { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string Email { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public bool EmailVerified { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public DateTime? EmailVerifiedOn { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public Guid Key { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public string Password { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string DisplayName { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string FirstName { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string MiddleName { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string LastName { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Phone { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public bool IsEnabled { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public int FailedLogins { get; set; }

  /// <summary>
  /// get/set - 
  /// </summary>
  public Gender? Gender { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public UserType UserType { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public UserStatus Status { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public DateTime? LastLoginOn { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public ICollection<UserClaim> Claims { get; } = new List<UserClaim>();

  /// <summary>
  /// 
  /// </summary>
  public ICollection<Role> Roles { get; } = new List<Role>();

  /// <summary>
  /// 
  /// </summary>
  public ICollection<UserRole> RolesManyToMany { get; } = new List<UserRole>();

  /// <summary>
  /// 
  /// </summary>
  public ICollection<Account> OwnedAccounts { get; } = new List<Account>();

  /// <summary>
  /// 
  /// </summary>
  public ICollection<Account> Accounts { get; } = new List<Account>();

  /// <summary>
  /// 
  /// </summary>
  public ICollection<UserAccount> AccountsManyToMany { get; } = new List<UserAccount>();
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an User object.
  /// </summary>
  protected User() { }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="username"></param>
  /// <param name="email"></param>
  /// <param name="key"></param>
  public User(string username, string email, Guid key)
  {
    this.Username = username;
    this.Email = email;
    this.Key = key;
    this.DisplayName = username;
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="username"></param>
  /// <param name="email"></param>
  public User(string username, string email) : this(username, email, Guid.NewGuid())
  {
  }
  #endregion
}
