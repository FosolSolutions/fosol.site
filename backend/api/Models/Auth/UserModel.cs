namespace Fosol.Site.Api.Models.Auth;

using Fosol.Site.Entities;

/// <summary>
/// get/set -
/// </summary>
public class UserModel
{
  #region Properties
  /// <summary>
  /// get/set -
  /// </summary>
  public long Id { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public string Username { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public string Email { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public Guid Key { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public string DisplayName { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public string FirstName { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public string MiddleName { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public string LastName { get; set; } = default!;

  /// <summary>
  /// get/set -
  /// </summary>
  public bool IsEnabled { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public int FailedLogins { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public UserType UserType { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public bool EmailVerified { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public DateTime? EmailVerifiedOn { get; set; }

  /// <summary>
  /// get/set -
  /// </summary>
  public IEnumerable<string> Roles { get; set; } = Array.Empty<string>();

  /// <summary>
  /// get/set -
  /// </summary>
  public IEnumerable<ClaimModel> Claims { get; set; } = Array.Empty<ClaimModel>();
  #endregion

  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  public UserModel() { }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="user"></param>
  public UserModel(Entities.User user)
  {
    this.Id = user.Id;
    this.Username = user.Username;
    this.Email = user.Email;
    this.Key = user.Key;
    this.DisplayName = user.DisplayName;
    this.FirstName = user.FirstName;
    this.MiddleName = user.MiddleName;
    this.LastName = user.LastName;
    this.IsEnabled = user.IsEnabled;
    this.FailedLogins = user.FailedLogins;
    this.UserType = user.UserType;
    this.EmailVerified = user.EmailVerified;
    this.EmailVerifiedOn = user.EmailVerifiedOn;
    // this.Roles = user.Roles.Select(r => r.Name).ToArray();
    // this.Claims = user.Roles.SelectMany(r => r.Claims.Select(c => new ClaimModel(c)))
    //   .Concat(user.Claims.Select(c => new ClaimModel(c))).ToArray();
  }
  #endregion
}
