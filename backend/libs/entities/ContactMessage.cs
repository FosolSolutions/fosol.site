using System.ComponentModel.DataAnnotations.Schema;

namespace Fosol.Site.Entities;

[Table("contact_message")]
public class ContactMessage : Auditable
{
  #region Properties
  [Column("id")]
  public int Id { get; set; }

  [Column("contact_id")]
  public int ContactId { get; set; }

  public Contact? Contact { get; set; }

  [Column("status")]
  public MessageStatus Status { get; set; } = MessageStatus.Draft;

  [Column("text")]
  public string Text { get; set; } = "";
  #endregion

  #region Constructor
  protected ContactMessage() { }

  public ContactMessage(Contact contact, string text)
  {
    if (String.IsNullOrWhiteSpace(text)) throw new ArgumentException("Message 'text' must not be empty.");

    this.Contact = contact ?? throw new ArgumentNullException(nameof(contact));
    this.ContactId = contact.Id;
    this.Text = text;
  }
  #endregion
}
