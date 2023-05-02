namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
/// <typeparam name="TKey"></typeparam>
public class SortableCodeAuditable<TKey> : SortableAuditable<TKey>
  where TKey : notnull
{
  #region Properties
  /// <summary>
  /// get/set - Unique code to identify the item.
  /// </summary>
  public string Code { get; set; } = "";
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an SortableCodeAuditable object.
  /// </summary>
  protected SortableCodeAuditable() { }

  /// <summary>
  /// Creates new instance of a SortableCodeAuditable object, initializes with specified parameters.
  /// </summary>
  /// <param name="code"></param>
  /// <param name="name"></param>
  public SortableCodeAuditable(string code, string name) : base(name)
  {
    this.Code = code;
  }
  #endregion
}
