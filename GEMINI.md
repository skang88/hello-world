# Project Documentation

## Project Structure
- `.env.example`: Example environment variables file.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `app.js`: The main application file (Node.js with Express).
- `Dockerfile`: Defines the Docker image for the application.
- `index.html`: The main HTML file served by the application.
- `Jenkinsfile`: Defines the CI/CD pipeline for Jenkins.
- `package-lock.json`: Records the exact dependency tree.
- `package.json`: Defines project metadata and dependencies.
- `.git/`: Git version control directory.

## Key Technologies
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Docker**: Containerization platform.
- **Jenkins**: Automation server for CI/CD.

## API Endpoints

### `GET /`
- **Description**: Serves the main `index.html` page with dynamic content.
- **Success Response**: `200 OK` with HTML content.

### `GET /health`
- **Description**: Provides a health check endpoint for monitoring.
- **Success Response**: `200 OK` with a JSON object indicating the application status and uptime.
  ```json
  {
    "status": "UP",
    "uptime": "123.45s",
    "timestamp": "2023-10-27T10:00:00.000Z"
  }
  ```

## Development Setup
1. Ensure Node.js and npm are installed.
2. Clone the repository.
3. Create a `.env` file by copying `.env.example` and fill in the required values: `cp .env.example .env`
4. Install dependencies: `npm install`
5. Start the application: `npm start`

The application will be available at `http://localhost:3000` (or the port specified in your `.env` file).

## Environment Variables
The application uses the following environment variables. These can be set in a `.env` file for local development.

- `PORT`: The port the server will listen on. Defaults to `3000`.
- `DB_ENGINE`: The name of the database engine to display.

## Docker
You can build and run this application using Docker.

**Build the image:**
```sh
docker build -t hello-world-app .
```

**Run the container:**
```sh
docker run -p 3000:3000 -d --name my-hello-world-app hello-world-app
```