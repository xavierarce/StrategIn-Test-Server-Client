# Test technique - API sécurisée par Register/Login

## Introduction

Bienvenue dans la documentation de l'API. Cette application permet aux utilisateurs de s'inscrire, de se connecter et d'accéder à la liste des utilisateurs enregistrés.

## Table des matières

- [Test technique - API sécurisée par Register/Login](#test-technique---api-sécurisée-par-registerlogin)
  - [Introduction](#introduction)
  - [Table des matières](#table-des-matières)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Structure du projet](#structure-du-projet)
  - [Fonctionnalités](#fonctionnalités)
  - [Endpoints](#endpoints)
  - [Endpoints](#endpoints-1)
  - [Controllers](#controllers)
    - [loginController.js](#logincontrollerjs)
    - [registerController.js](#registercontrollerjs)
    - [userController.js](#usercontrollerjs)
  - [Middlewares](#middlewares)
    - [validationFunctions.js](#validationfunctionsjs)
    - [authMiddleware.js](#authmiddlewarejs)
  - [Models](#models)
    - [User.model.js](#usermodeljs)
  - [Routes](#routes)
    - [loginRouter.js](#loginrouterjs)
    - [registerRouter.js](#registerrouterjs)
    - [usersRouter.js](#usersrouterjs)
  - [Services](#services)
    - [mongo.js](#mongojs)

## Installation

1. Clonez le projet.
2. Exécutez `npm install`.
3. Ajoutez le fichier contenant les variables d'environnement envoyé par email.
4. Exécutez `npm start` pour lancer le serveur avec nodemon.

## Usage

L'API offre trois routes principales:

1. **/register (POST)**: Permet à un utilisateur de créer un compte avec un email, un nom d'utilisateur et un mot de passe.
   - Paramètres du corps de la requête: email, username, password.

2. **/login (POST)**: Permet à un utilisateur de se connecter.
   - Paramètres du corps de la requête: email, password.

3. **/users (GET)**: Permet à un utilisateur authentifié d'obtenir la liste des utilisateurs.

---

## Structure du projet

```
StrategIn-Technical-Test Repo -  Xavier Arce 

1. src
    1. Controllers
        1. loginController.js
        2. registerController.js
        3. userController.js
    2. Middlewares
        1. validationFunctions.js
        2. authMiddleware.js
    3. Models
        1. User.model.js
    4. Routes
        1. loginRouter.js
        2. registerRouter.js
        3. userRouter.js
    5. Services
        1. mongo.js
    6. app.js
    7. server.js
2. package-lock.json
3. package.json
4. request.rest
```

## Fonctionnalités

- Enregistrement d'un utilisateur avec validation d'email, de nom d'utilisateur et de mot de passe.
- Connexion d'un utilisateur avec génération d'un token d'authentification.
- Accès à la liste des utilisateurs enregistrés pour un utilisateur authentifié.

## Endpoints

...

## Endpoints

1. **/register (POST)**: Permet à un utilisateur de créer un compte.
   - Paramètres du corps de la requête: email, username, password.
   - Controller: [registerController.registerUser](./src/Controllers/registerController.js)

2. **/login (POST)**: Permet à un utilisateur de se connecter.
   - Paramètres du corps de la requête: email, password.
   - Controller: [loginController.loginUser](./src/Controllers/loginController.js)
   - Response:
     ```json
     {
       "status": "success",
       "accessToken": <ACCESS_TOKEN>
     }
     ```

3. **/users (GET)**: Permet à un utilisateur authentifié d'obtenir la liste des utilisateurs.
   - Controller: [userController.getUsers](./src/Controllers/userController.js)
   - Authorization: Bearer `<ACCESS_TOKEN>`

Mention: Pour que la route /users fonctionne, vous devez envoyer le jeton JWT dans l'en-tête de la requête. Utilisez le jeton obtenu en réponse à la connexion. Exemple:

```http
GET http://localhost:3000/users
Authorization: Bearer <ACCESS_TOKEN>
```
---

## Controllers

### loginController.js

```javascript
// Gère la connexion d'un utilisateur.
// Retourne un message de succès et un token d'authentification en cas de succès.
loginRouter.post("/", loginController.loginUser);
```

### registerController.js

```javascript
// Gère l'enregistrement d'un utilisateur.
// Valide l'email, le nom d'utilisateur et le mot de passe.
// Retourne un message de succès en cas de succès.
registerRouter.post("/", registerController.registerUser);
```

### userController.js

```javascript
// Contrôleur pour obtenir la liste des utilisateurs.
// Retourne la liste des utilisateurs enregistrés.
getUsersRouter.get("/", authenticateToken, userController.getUsers);
```

## Middlewares

### validationFunctions.js

```javascript
// Fonctions de validation pour l'email, le nom d'utilisateur et le mot de passe.
// Lance une erreur si la validation échoue.
module.exports = {
  validateEmail,
  validateUsername,
  validatePassword,
};
```

### authMiddleware.js

```javascript
// Middleware pour vérifier le token d'authentification.
// Retourne une erreur 401 en cas d'absence de token.
// Retourne une erreur 403 en cas d'échec de vérification du token.
module.exports = authenticateToken;
```

## Models

### User.model.js

```javascript
// Modèle mongoose pour la collection 'users'.
// Définit la structure d'un utilisateur avec un nom d'utilisateur, un mot de passe et un email.
module.exports = mongoose.model("user", UsersSchema);
```

## Routes

### loginRouter.js

```javascript
// Route permettant la connexion d'un utilisateur.
// Retourne un message de succès et un token d'authentification en cas de succès.
loginRouter.post("/", loginController.loginUser);
```

### registerRouter.js

```javascript
// Route permettant l'enregistrement d'un utilisateur.
// Valide l'email, le nom d'utilisateur et le mot de passe.
// Retourne un message de succès en cas de succès.
registerRouter.post("/", registerController.registerUser);
```

### usersRouter.js

```javascript
// Route permettant à un utilisateur authentifié d'obtenir la liste des utilisateurs.
usersRouter.get("/", authenticateToken, userController.getUsers);
```

## Services

### mongo.js

```javascript
// Gestion de la connexion à MongoDB.
// Connecte l'application à la base de données MongoDB.
module.exports = {
  mongoConnect,
};
```

