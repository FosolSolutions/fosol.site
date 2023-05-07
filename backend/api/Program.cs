using System.Security.Claims;
using Fosol.Core.Encryption;
using Fosol.Mail;
using Fosol.Site.Api.Authentication;
using Fosol.Site.Api.Middleware;
using Fosol.Site.Api.Swagger;
using Fosol.Site.Options;
using Fosol.Site.UoW;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;

namespace Fosol.Site.Api;

/// <summary>
/// Program class, provides a way to setup and run the API.
/// </summary>
public class Program
{
  /// <summary>
  /// The entrypoint to start the API.
  /// </summary>
  /// <param name="args"></param>
  public static void Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);
    var config = builder.Configuration;
    var env = builder.Environment;

    // Add services to the container.

    builder.Services
      .AddSingleton(config)
      .AddSingleton(env)
      // .AddJsonSerializerOptions(config)
      .AddControllers()
        .AddJsonOptions(options =>
        {
          // config.CreateJsonSerializerOptions(options.JsonSerializerOptions);
          // options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        });
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
      .Configure<RouteOptions>(options => options.LowercaseUrls = true)
      .Configure<StorageOptions>(config.GetSection("Storage"))
      .AddHttpContextAccessor()
      .AddTransient(s => s.GetService<IHttpContextAccessor>()?.HttpContext?.User ?? new ClaimsPrincipal())
      .AddSingleton<IHashPassword, HashPassword>()
      .AddScoped<IAuthenticator, Authenticator>()
      .AddSiteUoW(config)
      .AddMail(config)
      .Configure<ForwardedHeadersOptions>(options =>
      {
        options.ForwardedHeaders = ForwardedHeaders.All;
        options.AllowedHosts = config.GetValue<string>("AllowedHosts")?.Split(';').ToList() ?? new List<string>();
      })
      .AddCors(options =>
      {
        var withOrigins = config.GetSection("Cors:WithOrigins").Value?.Split(" ") ?? Array.Empty<string>();
        if (withOrigins.Any())
        {
          options.AddPolicy(
            name: "allowedOrigins",
            builder =>
            {
              builder
                .WithOrigins(withOrigins)
                .AllowAnyHeader()
                .AllowAnyMethod(); ;
            });
        }
      });

    var app = builder.Build();

    app.UsePathBase(config.GetValue<string>("BaseUrl"));
    app.UseForwardedHeaders();

    app.UseMiddleware(typeof(ErrorHandlingMiddleware));
    app.UseMiddleware(typeof(ResponseTimeMiddleware));

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
    app.UseCors("allowedOrigins");
    app.UseStaticFiles();

    app.UseMiddleware(typeof(LogRequestMiddleware));

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.Run();
  }
}
