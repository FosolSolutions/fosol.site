namespace Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public class ResumeSkill : Auditable
{
  #region Properties
  /// <summary>
  /// get/set - Primary key (Identity)
  /// </summary>
  public int Id { get; set; }

  /// <summary>
  /// get/set - Foreign key to resume.
  /// </summary>
  public int ResumeId { get; set; }

  /// <summary>
  /// get/set - 
  /// </summary>
  public Resume? Resume { get; set; }

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Name { get; set; } = "";

  /// <summary>
  /// get/set - 
  /// </summary>
  public SkillLevel Level { get; set; } = SkillLevel.Junior;

  /// <summary>
  /// get/set - 
  /// </summary>
  public string Description { get; set; } = "";
  #endregion

  #region Constructors
  /// <summary>
  /// Creates a new instance of an ResumeSkill object.
  /// </summary>
  protected ResumeSkill() { }

  /// <summary>
  /// Creates a new instance of an ResumeSkill object, initializes with specified parameters.
  /// </summary>
  /// <param name="resume"></param>
  /// <param name="name"></param>
  /// <param name="level"></param>
  /// <param name="description"></param>
  public ResumeSkill(Resume resume, string name, SkillLevel level, string description)
  {
    this.Resume = resume ?? throw new ArgumentNullException(nameof(resume));
    this.ResumeId = resume.Id;
    this.Name = name;
    this.Level = level;
    this.Description = description;
  }

  /// <summary>
  /// Creates a new instance of an ResumeSkill object, initializes with specified parameters.
  /// </summary>
  /// <param name="resumeId"></param>
  /// <param name="name"></param>
  /// <param name="level"></param>
  /// <param name="description"></param>
  public ResumeSkill(int resumeId, string name, SkillLevel level, string description)
  {
    this.ResumeId = resumeId;
    this.Name = name;
    this.Level = level;
    this.Description = description;
  }
  #endregion
}
