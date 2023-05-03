namespace Fosol.Site.Entities;

public class Contact : Auditable
{
  #region Properties
  public int Id { get; set; }

  public string DisplayName { get; set; } = "";

  public string FirstName { get; set; } = "";

  public string LastName { get; set; } = "";

  public string Company { get; set; } = "";

  public string Email { get; set; } = "";

  public string Phone { get; set; } = "";

  public string Note { get; set; } = "";
  #endregion

  #region Constructor
  protected Contact() { }

  public Contact(string email, string displayName, string company)
  {
    this.Email = email;
    this.DisplayName = displayName;
    this.Company = company;
  }
  #endregion
}
