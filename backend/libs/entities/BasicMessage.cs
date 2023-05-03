namespace Fosol.Site.Entities;

public class BasicMessage : Auditable
{
  #region Properties
  public int Id { get; set; }

  public string IpAddress { get; set; } = "";

  public string Name { get; set; } = "";

  public string Company { get; set; } = "";

  public string Email { get; set; } = "";

  public string Phone { get; set; } = "";

  public MessageStatus Status { get; set; } = MessageStatus.Draft;

  public string Text { get; set; } = "";
  #endregion

  #region Constructor
  protected BasicMessage() { }

  public BasicMessage(string ipAddress, string name, string company, string email, string phone, string text)
  {
    if (String.IsNullOrWhiteSpace(name)) throw new ArgumentException("Message 'name' must not be empty.");
    if (String.IsNullOrWhiteSpace(email)) throw new ArgumentException("Message 'email' must not be empty.");
    if (String.IsNullOrWhiteSpace(text)) throw new ArgumentException("Message 'text' must not be empty.");

    this.IpAddress = ipAddress;
    this.Name = name;
    this.Company = company;
    this.Email = email;
    this.Phone = phone;
    this.Text = text;
  }
  #endregion
}
