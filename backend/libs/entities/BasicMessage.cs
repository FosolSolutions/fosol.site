using System.ComponentModel.DataAnnotations.Schema;

namespace Fosol.Site.Entities;

[Table("basic_message")]
public class BasicMessage : Auditable
{
  #region Properties
  [Column("id")]
  public int Id { get; set; }

  [Column("name")]
  public string Name { get; set; } = "";

  [Column("company")]
  public string Company { get; set; } = "";

  [Column("email")]
  public string Email { get; set; } = "";

  [Column("phone")]
  public string Phone { get; set; } = "";

  [Column("status")]
  public MessageStatus Status { get; set; } = MessageStatus.Draft;

  [Column("text")]
  public string Text { get; set; } = "";
  #endregion

  #region Constructor
  protected BasicMessage() { }

  public BasicMessage(string name, string company, string email, string phone, string text)
  {
    if (String.IsNullOrWhiteSpace(name)) throw new ArgumentException("Message 'name' must not be empty.");
    if (String.IsNullOrWhiteSpace(email)) throw new ArgumentException("Message 'email' must not be empty.");
    if (String.IsNullOrWhiteSpace(text)) throw new ArgumentException("Message 'text' must not be empty.");

    this.Name = name;
    this.Company = company;
    this.Email = email;
    this.Phone = phone;
    this.Text = text;
  }
  #endregion
}
