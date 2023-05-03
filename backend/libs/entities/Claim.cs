namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public class Claim : SortableAuditable<int>
{
  #region Properties
  /// <summary>
  /// get/set - Foreign key to the account this claim belongs to.
  /// </summary>
  public int AccountId { get; set; }

  /// <summary>
  /// get/set - The account this claim belongs to.
  /// </summary>
  public Account? Account { get; set; }

  /// <summary>
  /// get/set - A name identifies the type, whereas the value provides the specific detail (i.e. skill=engineer [name=value]).
  /// </summary>
  public string Value { get; set; } = "";

  /// <summary>
  /// get - Collection of roles.
  /// </summary>
  public ICollection<Role> Roles { get; } = new List<Role>();

  /// <summary>
  /// get - Collection of roles (many-to-many).
  /// </summary>
  public ICollection<RoleClaim> RolesManyToMany { get; } = new List<RoleClaim>();
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an Claim object.
  /// </summary>
  protected Claim() { }

  /// <summary>
  /// Creates a new instance of a Claim object, initializes with specified parameters.
  /// </summary>
  /// <param name="account"></param>
  /// <param name="name"></param>
  /// <param name="value"></param>
  public Claim(Account account, string name, string value) : base(name)
  {
    this.Account = account ?? throw new ArgumentNullException(nameof(account));
    this.AccountId = account.Id;
    this.Value = value ?? throw new ArgumentNullException(nameof(value));
  }

  /// <summary>
  /// Creates a new instance of a Claim object, initializes with specified parameters.
  /// </summary>
  /// <param name="accountId"></param>
  /// <param name="name"></param>
  /// <param name="value"></param>
  public Claim(int accountId, string name, string value) : base(name)
  {
    this.AccountId = accountId;
    this.Value = value ?? throw new ArgumentNullException(nameof(value));
  }
  #endregion

  #region Methods
  /// <summary>
  /// Converts the specified 'claim' to a KeyValuePair object.
  /// </summary>
  /// <param name="claim"></param>
  public static implicit operator KeyValuePair<string, string>(Claim claim)
  {
    return new KeyValuePair<string, string>(claim.Name, claim.Value);
  }
  #endregion
}
