using Fosol.Site.Api.Swagger;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;

namespace Fosol.Site.Api;

public class Program
{
  public static void Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services
      .AddEndpointsApiExplorer()
      .AddSwaggerGen()
      .AddApiVersioning(options =>
        {
          options.DefaultApiVersion = new ApiVersion(1, 0);
          options.AssumeDefaultVersionWhenUnspecified = true;
          options.ReportApiVersions = true;
          options.ApiVersionReader = ApiVersionReader.Combine(
            new UrlSegmentApiVersionReader(),
            new HeaderApiVersionReader("api-version"),
            new MediaTypeApiVersionReader("api-version"));
        })
      .AddVersionedApiExplorer(setup =>
        {
          setup.GroupNameFormat = "'v'VVV";
          setup.SubstituteApiVersionInUrl = true;
        })
      .ConfigureOptions<ConfigureSwaggerOptions>()
      .Configure<RouteOptions>(options => options.LowercaseUrls = true);

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
      var apiVersionDescriptionProvider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();
      app.UseSwagger();
      app.UseSwaggerUI(options =>
      {
        foreach (var description in apiVersionDescriptionProvider.ApiVersionDescriptions.Reverse())
        {
          options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json",
              description.GroupName.ToUpperInvariant());
        }
      });
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
  }
}
