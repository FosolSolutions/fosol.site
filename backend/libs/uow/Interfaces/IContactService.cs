namespace Fosol.Site.UoW;

using Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public interface IContactService : IBaseService<Contact, long>
{
  /// <summary>
  /// 
  /// </summary>
  /// <param name="name"></param>
  /// <returns></returns>
  IEnumerable<Contact> FindByDisplayName(string name);
}
