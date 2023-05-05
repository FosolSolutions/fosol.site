using System.Net.Mail;
using Fosol.Mail.Models;
using Microsoft.Extensions.Options;

namespace Fosol.Mail;

/// <summary>
/// MailClient class, provides a way to send emails.
/// </summary>
public class MailClient
{
  #region Variables
  private readonly MailOptions _options;
  private readonly SmtpClient _client;
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of a MailClient object, and initializes it with the specified options.
  /// </summary>
  /// <param name="options"></param>
  /// <exception cref="ArgumentNullException"></exception>
  public MailClient(MailOptions options)
  {
    _options = options ?? throw new ArgumentNullException(nameof(options));

    _client = new SmtpClient(_options.Host)
    {
      Port = _options.Port,
      DeliveryMethod = SmtpDeliveryMethod.Network,
      UseDefaultCredentials = _options.UseDefaultCredentials,
      Credentials = new System.Net.NetworkCredential(!String.IsNullOrWhiteSpace(_options.Username) ? _options.Username : _options.FromEmail, _options.Password),
      TargetName = _options.TargetName,
      EnableSsl = _options.EnableSsl,
      Timeout = _options.Timeout,
    };
  }

  /// <summary>
  /// Creates a new instance of a MailClient object, and initializes it with the specified options.
  /// </summary>
  /// <param name="options"></param>
  public MailClient(IOptions<MailOptions> options) : this(options.Value)
  {
  }
  #endregion

  #region Methods
  /// <summary>
  /// Create a mail message to invite the user to the calendar.
  /// </summary>
  /// <param name="model"></param>
  /// <returns></returns>
  public MailMessage PrepareMessage(EmailModel model)
  {
    // TODO: Move this to some kind of templating service.
    // TODO: Need to include the current domain name instead of hardcoding it.
    var mail = new MailMessage
    {
      From = new MailAddress(_options.FromEmail),
      Subject = model.Subject,
      IsBodyHtml = true,
      Body = model.Body
    };
    mail.To.Add(new MailAddress(model.To));
    return mail;
  }

  /// <summary>
  /// Send the specified email message.
  /// </summary>
  /// <param name="message"></param>
  public void Send(MailMessage message)
  {
    _client.Send(message);
  }

  /// <summary>
  /// Send the specified email message asynchronously.
  /// </summary>
  /// <param name="message"></param>
  /// <returns></returns>
  public async Task SendAsync(MailMessage message)
  {
    await _client.SendMailAsync(message);
  }
  #endregion
}
