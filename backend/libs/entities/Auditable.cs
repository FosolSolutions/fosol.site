namespace Fosol.Site.Entities;

public abstract class Auditable
{
  #region Properties
  public string CreatedBy { get; set; } = "";
  public DateTimeOffset CreatedOn { get; set; }
  public string UpdatedBy { get; set; } = "";
  public DateTimeOffset UpdatedOn { get; set; }
  public long Version { get; set; }
  #endregion

  #region Constructors
  protected Auditable()
  {
    var now = new DateTimeOffset();
    this.CreatedOn = now;
    this.UpdatedOn = now;
  }
  #endregion
}
