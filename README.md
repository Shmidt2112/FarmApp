# Farm App

This project consists of two parts: frontend (Angular) and backend (.NET Core).

## Running with Docker Compose

To run the project using Docker Compose, follow these steps:

1. Ensure you have Docker and Docker Compose installed. If not, please install them according to the official Docker documentation.

2. Navigate to the root folder of the project, where the `docker-compose.yml` file is located.

3. Start the containers using the following command:
```
docker-compose up --build
```

This command will create and start containers for the frontend and backend projects, install all dependencies, and configure them automatically.

After a successful launch, the frontend will be accessible at http://localhost:4200, and the backend at http://localhost:5050.

## Running the Projects Manually

### Running Frontend (Angular)
1. Navigate to the frontend folder:
```
cd frontend/farm-angular-app
```

2. Install dependencies:
```
npm install
```
2. Start the Angular Development Server:
```
npm start
```
The frontend will be accessible at http://localhost:4200.

### Running Backend (.NET Core)
1. Navigate to the backend folder:
```
cd backend
```

2. Restore dependencies:
```
dotnet restore
```
2. Run the application:
```
dotnet run --project=WebApi
```
The backend will be accessible at http://localhost:5000/swagger/index.html
