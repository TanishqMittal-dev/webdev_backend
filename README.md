# To-Do List Manager API

A beginner-friendly backend project built using **Node.js, Express.js, and MongoDB Atlas**. This project provides RESTful APIs to create, retrieve, update, and delete tasks.

## Features

- Create new tasks
- Retrieve all tasks
- Update task completion status
- Delete tasks
- Store task data in MongoDB Atlas
- Use environment variables for database configuration
- Handle errors and return appropriate HTTP status codes

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB object modeling library
- **dotenv** – Environment variable management
- **Postman** – API testing tool

## Project Structure

```text
todololist/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── .env                 # Not committed to GitHub
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Postman](https://www.postman.com/downloads/)
- [Git](https://git-scm.com/)

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd todlolist
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your public GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root directory:

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Replace the placeholder with your MongoDB Atlas connection string. Never commit your `.env` file or share your database credentials publicly.

### 4. Start the server

```bash
npm start
```

The server should run at:

`http://localhost:3000`

## API Endpoints

Base
