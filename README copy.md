# Strateg.in - Test technique - API sécurisée par Register/Login

**Brief description**: 
Nous vous demandons de développer une application permettant de s’inscrire via des informations basiques.
• Au premier accès, l’utilisateur doit se créer un compte (email, mdp) sur la route /register
• Une fois le compte créé, l’utilisateur doit utiliser la route /login pour récupérer un token.
• Une fois logué, l’utilisateur peut accéder à la liste des utilisateurs déjà enregistrés sur la plateforme via la route /users.

## Table of Contents
- [Strateg.in - Test technique - API sécurisée par Register/Login](#strategin---test-technique---api-sécurisée-par-registerlogin)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started
1. Clone the project.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with required environment variables (contact for details).
4. Run `npm start` to start the server with nodemon.
5. Check `request.rest` for sample API requests.

## Folder Structure
1. **TechnicaltestRepo**
    1. **Controllers**
        1. `loginController.js`
        2. `registerController.js`
        3. `userController.js`
    2. **Middlewares**
        1. `validationFunctions.js`
        2. `authMiddleware.js`
    3. **Models**
        1. `User.model.js` (mongoose Schema and model for users)
    4. **Routes**
        1. `loginRouter.js`
        2. `registerRouter.js`
        3. `userRouter.js`
    5. **Services**
        1. `mongo.js`
    6. `app.js`
    7. `server.js`
2. `package-lock.json`
3. `package.json`
4. `request.rest`

## Usage
1. **Register**: Send a POST request to `/register` with a body containing username, email, and password.
2. **Login**: Send a POST request to `/login` to obtain a JSON Web Token.
3. **Get Users**: Send a GET request to `/users` with the obtained token in the header as a bearer token for authentication.

## Contributing
Feel free to contribute by opening issues or submitting pull requests.

## License
This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
