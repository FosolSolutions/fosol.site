namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
/// <typeparam name="TKey"></typeparam>
public class SortableAuditable<TKey> : CommonAuditable<TKey>
  where TKey : notnull
{
  #region Properties
  /// <summary>
  /// 
  /// </summary>
  public int SortOrder { get; set; }
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an SortableAuditable object.
  /// </summary>
  protected SortableAuditable() { }

  /// <summary>
  /// Creates a new instance of a SortableAuditable object, initializes with specified parameters.
  /// </summary>
  /// <param name="name"></param>
  public SortableAuditable(string name) : base(name)
  {

  }
  #endregion
}
