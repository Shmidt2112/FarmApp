FROM mcr.microsoft.com/dotnet/sdk:7.0 as build
 
WORKDIR /app
 
COPY FarmApp.sln ./
COPY WebApi/ ./WebApi/
COPY Dal/ ./Dal/
COPY Services/ ./Services/
RUN dotnet restore 
 
COPY . .
 
RUN dotnet publish -c Release -o out
 
FROM mcr.microsoft.com/dotnet/aspnet:7.0
 
WORKDIR /app
 
COPY --from=build /app/out .
 
ENTRYPOINT ["./WebApi"]
