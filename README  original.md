# Strateg.in - Test technique - API sécurisée par Register/Login

## Brief Description

This project is a secure API for user registration and login. Users can sign up with basic information, including email and password. After creating an account, users can log in to obtain a token. Once logged in, users can access the list of registered users through the /users route.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Getting Started

### Prerequisites

1. Node.js installed
2. MongoDB (with a possibility to create a free Atlas DB)

### Installation

1. Clone the project: `git clone <repository-url>`
2. Navigate to the project directory: `cd TechnicaltestRepo`
3. Install dependencies: `npm install`
4. Create a `.env` file with required environment variables (provided via email).
5. Start the server: `npm start` (nodemon will run)

### Request Samples

Refer to the `request.rest` file for example API requests.

## Folder Structure

- `src`
  - `Controllers`
    - `loginController.js`
    - `registerController.js`
    - `userController.js`
  - `Middlewares`
    - `validationFunctions.js`
    - `authMiddleware.js`
  - `Models`
    - `User.model.js` (mongoose Schema and model for users)
  - `Routes`
    - `loginRouter.js`
    - `registerRouter.js`
    - `userRouter.js`
  - `Services`
    - `mongo.js`
  - `app.js`
  - `server.js`

## Usage

1. **Register:**
   - Send a request to `/register` with a body containing a username, email, and password.
   - Receive a registration confirmation.

2. **Login:**
   - Send a request to `/login` with email and password.
   - Receive a JSON Web Token (JWT).

3. **Get Users:**
   - Send a request to `/users` with the JWT token in the header as a bearer token.
   - Receive a list of registered users.

