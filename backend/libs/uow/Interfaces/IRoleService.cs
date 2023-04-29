namespace Fosol.Site.UoW;

using Fosol.Site.Entities;

/// <summary>
/// 
/// </summary>
public interface IRoleService : IBaseService<Role, long>
{
  /// <summary>
  /// 
  /// </summary>
  /// <param name="key"></param>
  /// <returns></returns>
  Role? FindByKey(Guid key);

  /// <summary>
  /// 
  /// </summary>
  /// <param name="name"></param>
  /// <returns></returns>
  IEnumerable<Role> FindByName(string name);

  /// <summary>
  /// 
  /// </summary>
  /// <param name="accountId"></param>
  /// <returns></returns>
  IEnumerable<Role> FindByAccount(int accountId);
}
