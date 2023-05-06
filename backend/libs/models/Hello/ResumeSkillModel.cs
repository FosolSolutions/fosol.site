using Fosol.Site.Entities;

namespace Fosol.Site.Models.Hello;

public class ResumeSkillModel
{
  #region Properties
  public string Name { get; set; } = "";
  public SkillLevel Level { get; set; } = SkillLevel.Junior;
  public string Description { get; set; } = "";
  #endregion

  #region Constructors
  public ResumeSkillModel() { }

  public ResumeSkillModel(ResumeSkill skill)
  {
    this.Name = skill.Name;
    this.Level = skill.Level;
    this.Description = skill.Description;
  }
  #endregion

  #region Methods
  public ResumeSkill ToEntity(int resumeId)
  {
    return new ResumeSkill(resumeId, this.Name, this.Level, this.Description);
  }
  #endregion
}
