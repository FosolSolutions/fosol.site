using System.ComponentModel.DataAnnotations.Schema;

namespace Fosol.Site.Entities;

[Table("contact")]
public class Contact : Auditable
{
  #region Properties
  [Column("id")]
  public int Id { get; set; }

  [Column("display_name")]
  public string DisplayName { get; set; } = "";

  [Column("first_name")]
  public string FirstName { get; set; } = "";

  [Column("last_name")]
  public string LastName { get; set; } = "";

  [Column("company")]
  public string Company { get; set; } = "";

  [Column("email")]
  public string Email { get; set; } = "";

  [Column("phone")]
  public string Phone { get; set; } = "";

  [Column("note")]
  public string Note { get; set; } = "";

  public virtual List<ContactMessage> Messages { get; } = new List<ContactMessage>();
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
