namespace Fosol.Site.Options;

/// <summary>
/// StorageOptions class, provides a way to configure storage options.
/// </summary>
public class StorageOptions
{
  #region Properties
  /// <summary>
  /// get/set - Resume storage options.
  /// </summary>
  public StorageResumeOptions Resume { get; set; } = new StorageResumeOptions();
  #endregion
}
