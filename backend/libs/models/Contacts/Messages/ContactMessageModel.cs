using Fosol.Site.Entities;

namespace Fosol.Site.Models.Contacts.Messages;

public class ContactMessageModel
{
  #region Properties
  public string Text { get; set; } = "";
  #endregion

  #region Constructors
  public ContactMessageModel() { }

  public ContactMessageModel(ContactMessage message)
  {
    this.Text = message.Text;
  }
  #endregion
}
