namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
/// <typeparam name="TKey"></typeparam>
public class CommonAuditable<TKey> : Auditable
  where TKey : notnull
{
  #region Properties
  /// <summary>
  /// 
  /// </summary>
  public TKey Id { get; set; } = default!;

  /// <summary>
  /// 
  /// </summary>
  public string Name { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public string Description { get; set; } = "";

  /// <summary>
  /// 
  /// </summary>
  public bool IsEnabled { get; set; }
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an CommonAuditable object.
  /// </summary>
  protected CommonAuditable() { }

  /// <summary>
  /// Creates a new instance of a CommonAuditable object, initializes with specified parameters.
  /// </summary>
  /// <param name="name"></param>
  public CommonAuditable(string name)
  {
    this.Name = name;
  }
  #endregion
}
