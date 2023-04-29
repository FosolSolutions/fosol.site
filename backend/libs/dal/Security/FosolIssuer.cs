namespace Fosol.Site.Dal.Security;

/// <summary>
/// 
/// </summary>
public static class FosolIssuer
{
  /// <summary>
  /// 
  /// </summary>
  public const string Issuer = "coevent";

  /// <summary>
  /// 
  /// </summary>
  public const string OriginalIssuer = "coevent";

  /// <summary>
  /// 
  /// </summary>
  /// <param name="id"></param>
  /// <returns></returns>
  public static string Account(long id)
  {
    return $"account:{id}";
  }
}
