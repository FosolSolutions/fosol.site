using Fosol.Site.Entities;

namespace Fosol.Site.Models.Contacts.Messages;

public class BasicMessageModel
{
  #region Properties
  public string Name { get; set; } = "";
  public string Company { get; set; } = "";
  public string Email { get; set; } = "";
  public string Phone { get; set; } = "";
  public string Text { get; set; } = "";
  #endregion

  #region Constructors
  public BasicMessageModel() { }

  public BasicMessageModel(BasicMessage message)
  {
    this.Name = message.Name;
    this.Company = message.Company;
    this.Email = message.Email;
    this.Phone = message.Phone;
    this.Text = message.Text;
  }
  #endregion

  #region Methods
  public BasicMessage ToEntity()
  {
    return new BasicMessage(this.Name, this.Company, this.Email, this.Phone, this.Text);
  }
  #endregion
}
