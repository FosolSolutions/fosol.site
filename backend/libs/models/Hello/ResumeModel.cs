using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using Fosol.Core.Extensions;
using Fosol.Site.Entities;
using Microsoft.AspNetCore.Http;

namespace Fosol.Site.Models.Hello;

public class ResumeModel
{
  #region Properties
  public string FirstName { get; set; } = "";
  public string LastName { get; set; } = "";
  public string Email { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Phone { get; set; } = "";
  public string Position { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Company { get; set; } = "";
  public string Employment { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Address { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string City { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Region { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Country { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Postal { get; set; } = "";
  public string Description { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string Salary { get; set; } = "";
  [DisplayFormat(ConvertEmptyStringToNull = false)]
  public string FilePath { get; set; } = "";
  public IFormFile? File { get; set; }

  public IEnumerable<ResumeSkillModel> Skills { get; set; } = Array.Empty<ResumeSkillModel>();
  #endregion

  #region Constructors
  public ResumeModel() { }

  public ResumeModel(Resume resume)
  {
    this.FirstName = resume.FirstName;
    this.LastName = resume.LastName;
    this.Email = resume.Email;
    this.Phone = resume.Phone;
    this.Position = resume.Position;
    this.Company = resume.Company;
    this.Employment = resume.Employment;
    this.Address = resume.Address;
    this.City = resume.City;
    this.Region = resume.Region;
    this.Country = resume.Country;
    this.Postal = resume.Postal;
    this.Description = resume.Postal;
    this.Salary = resume.Postal;
    this.FilePath = resume.FilePath;
  }
  #endregion

  #region Methods
  public Resume ToEntity()
  {
    var resume = new Resume(this.FirstName, this.LastName, this.Email, this.Position, this.Employment, this.Description)
    {
      Phone = this.Phone,
      Company = this.Company,
      Address = this.Address,
      City = this.City,
      Region = this.Region,
      Country = this.Country,
      Postal = this.Postal,
      Salary = this.Salary,
      FilePath = this.FilePath,
    };

    resume.Skills.AppendRange(this.Skills.Select(s => new ResumeSkill(resume, s.Name, s.Level, s.Description)));
    return resume;
  }
  #endregion
}
