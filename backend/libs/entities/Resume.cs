namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public class Resume : Auditable
{
  #region Properties
  /// <summary>
  /// get/set - Primary key (Identity)
  /// </summary>
  public int Id { get; set; }

  /// <summary>
  /// get/set - 
  /// </summary>
  public string FirstName { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string LastName { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Email { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Phone { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Position { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Employment { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Company { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Address { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string City { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Region { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Country { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Postal { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Description { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Salary { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public string FilePath { get; set; } = "";

  /// <summary>
  /// get - Collection of resume skills.
  /// </summary>
  public ICollection<ResumeSkill> Skills { get; } = new List<ResumeSkill>();
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an Resume object.
  /// </summary>
  protected Resume() { }

  /// <summary>
  /// Creates a new instance of an Resume object, initializes with specified parameters.
  /// </summary>
  /// <param name="name"></param>
  /// <param name="type"></param>
  /// <param name="owner"></param>
  /// <param name="key"></param>
  public Resume(string firstName, string lastName, string email, string position, string employment, string description)
  {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.Position = position;
    this.Employment = employment;
    this.Description = description;
  }
  #endregion
}
