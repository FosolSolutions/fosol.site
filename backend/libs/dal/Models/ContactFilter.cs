using Fosol.Core.Extensions;
using Microsoft.Extensions.Primitives;

namespace Fosol.Site.Entities.Models;

/// <summary>
/// 
/// </summary>
public class ContactFilter : PageFilter
{
  #region Properties
  /// <summary>
  /// get/set - 
  /// </summary>
  public string? DisplayName { get; set; }
  #endregion

  #region Constructors
  /// <summary>
  /// 
  /// </summary>
  /// <param name="url"></param>
  public ContactFilter(string url) : this(Microsoft.AspNetCore.WebUtilities.QueryHelpers.ParseQuery(new Uri(url).Query))
  {
  }

  /// <summary>
  /// 
  /// </summary>
  /// <param name="queryParams"></param>
  public ContactFilter(Dictionary<string, StringValues> queryParams) : base(queryParams)
  {
    var filter = new Dictionary<string, StringValues>(queryParams, StringComparer.OrdinalIgnoreCase);

    this.DisplayName = filter.GetStringValue(nameof(this.DisplayName));
  }
  #endregion
}
