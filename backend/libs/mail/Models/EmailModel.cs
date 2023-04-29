namespace Fosol.Mail.Models;

/// <summary>
/// 
/// </summary>
public class EmailModel
{
  #region Properties
  /// <summary>
  /// 
  /// </summary>
  public string From { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public string To { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public string Subject { get; set; }

  /// <summary>
  /// 
  /// </summary>
  public string Body { get; set; }
  #endregion

  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="from"></param>
  /// <param name="to"></param>
  /// <param name="subject"></param>
  /// <param name="body"></param>
  public EmailModel(string from, string to, string subject, string body)
  {
    this.From = from;
    this.To = to;
    this.Subject = subject;
    this.Body = body;
  }
  #endregion
}
