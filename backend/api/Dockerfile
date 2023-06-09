FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# Copy everything
COPY . ./

# Restore as distinct layers
RUN dotnet restore ./api
ENV PATH="$PATH:/root/.dotnet/tools"
RUN dotnet tool install --global dotnet-ef --version 7.0.0

# Build and publish a release
RUN dotnet publish ./api -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0

RUN apt-get update && apt-get -y upgrade
RUN apt -y install curl

WORKDIR /app
COPY --from=build-env /app/out .

RUN mkdir /mnt/storage
VOLUME /mnt/storage
RUN chgrp -R 0 /mnt/storage && \
    chmod -R g=u /mnt/storage && \
    chown -R 1001 /mnt/storage

USER 1001

ENTRYPOINT ["dotnet", "Fosol.Site.Api.dll"]
