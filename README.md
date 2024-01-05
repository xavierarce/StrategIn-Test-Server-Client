
# Test technique - API sécurisée par Enregistrement/Connexion

## Introduction

Bienvenue dans la documentation de l'API ! Cette application se compose de 3 étapes :

1. Permet à l'utilisateur de créer un compte et de le sauvegarder dans MongoDB.
2. Permet à l'utilisateur de se connecter et de recevoir un jeton.
3. Permet à l'utilisateur de récupérer la liste des utilisateurs dans la base de données une fois connecté avec son jeton.

## Table des matières

- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Endpoints](#endpoints)
- [Contrôleurs](#contrôleurs)
  - [loginController.js](#logincontrollerjs)
  - [registerController.js](#registercontrollerjs)
  - [userController.js](#usercontrollerjs)
- [Middlewares](#middlewares)
  - [validationFunctions.js](#validationfunctionsjs)
  - [authMiddleware.js](#authmiddlewarejs)
- [Modèles](#modèles)
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
3. Ajoutez le fichier avec les variables d'environnement envoyé par courriel à la racine du référentiel.
4. Exécutez `npm start` pour démarrer le serveur avec nodemon.

## Structure du projet


StrategIn-Technical-Test Repo -  Xavier Arce

1. src
    1. Contrôleurs
        1. loginController.js
        2. registerController.js
        3. userController.js
    2. Middlewares
        1. validationFunctions.js
        2. authMiddleware.js
    3. Modèles
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



## Utilisation

## Fonctionnalités

- Enregistrement d'un utilisateur avec validation de l'adresse électronique, du nom d'utilisateur et du mot de passe.
- Connexion d'un utilisateur avec génération d'un jeton d'authentification.
- Accès à la liste des utilisateurs enregistrés pour un utilisateur authentifié avec un jeton.

## Endpoints

1. **/register (POST)**: Permet à un utilisateur de créer un compte.
    - Paramètres du corps de la requête : adresse électronique, nom d'utilisateur, mot de passe.

        ```json
        // Exemple de requête
        {
          "username": "username",
          "email": "email@email.com",
          "password":"Secure12"
        }

        ```
    - Contrôleur : [registerController.registerUser](notion://www.notion.so/src/Controllers/registerController.js)
2. **/login (POST)**: Permet à un utilisateur de se connecter.
    - Paramètres du corps de la requête : adresse électronique, mot de passe.

        ```json
        // Exemple de requête
        {
          "email": "email@email.com",
          "password":"Secure12"
        }

        ```
    - Contrôleur : [loginController.loginUser](notion://www.notion.so/src/Controllers/loginController.js)
    - Réponse :

        ```json
        {
          "status": "success",
          "accessToken": <ACCESS_TOKEN>
        }

        ```
3. **/users (GET)**: Permet à un utilisateur authentifié d'obtenir la liste des utilisateurs.
    - Contrôleur : [userController.getUsers](notion://www.notion.so/src/Controllers/userController.js)
    - Autorisation : Porteur `<ACCESS_TOKEN>`

        **Mention :** Pour que la route /users fonctionne, vous devez envoyer le jeton JWT, reçu en /login, dans l'en-tête de la requête. Utilisez le jeton obtenu en réponse à la connexion. Exemple :

        ```http
        GET http://localhost:3000/users
        Authorization: Bearer <ACCESS_TOKEN>

        ```

---

## Contrôleurs

### loginController.js

```jsx
// Gère la connexion d'un utilisateur.
// Renvoie un message de succès et un jeton d'authentification en cas de réussite.
loginRouter.post("/", loginController.loginUser);

```

### registerController.js

```jsx
// Gère l'enregistrement d'un utilisateur.
// Valide l'adresse électronique, le nom d'utilisateur et le mot de passe.
// Renvoie un message de succès en cas de réussite.
registerRouter.post("/", registerController.registerUser);

```

### userController.js

```jsx
// Contrôleur pour obtenir la liste des utilisateurs.
// Renvoie la liste des utilisateurs enregistrés.
getUsersRouter.get("/", authenticateToken, userController.getUsers);

```

## Middlewares

### validationFunctions.js

```jsx
// Fonctions de validation pour l'adresse électronique, le nom d'utilisateur et le mot de passe.
// Lance une erreur si la validation échoue.
module.exports = {
  validateEmail,
  validateUsername,
  validatePassword,
};

```

### authMiddleware.js

```jsx
// Middleware pour vérifier le jeton d'authentification.
// Renvoie une erreur 401 en cas d'absence de jeton.
// Renvoie une erreur 403 en cas d'échec de la vérification du jeton.
module.exports = authenticateToken;

```

## Modèles

### User.model.js

```jsx
// Modèle mongoose pour la collection 'users'.
// Définit la structure d'un utilisateur avec un nom d'utilisateur, un mot de passe et une adresse électronique.
module.exports = mongoose.model("user", UsersSchema);

```

## Routes

### loginRouter.js

```jsx
// Route permettant la connexion d'un utilisateur.
// Renvoie un message de succès et

 un jeton d'authentification en cas de réussite.
loginRouter.post("/", loginController.loginUser);

```

### registerRouter.js

```jsx
// Route permettant l'enregistrement d'un utilisateur.
// Valide l'adresse électronique, le nom d'utilisateur et le mot de passe.
// Renvoie un message de succès en cas de réussite.
registerRouter.post("/", registerController.registerUser);

```

### usersRouter

.js

```jsx
// Route permettant à un utilisateur authentifié d'obtenir la liste des utilisateurs.
usersRouter.get("/", authenticateToken, userController.getUsers);

```

## Services

### mongo.js

```jsx
// Gestion de la connexion à MongoDB.
// Connecte l'application à la base de données MongoDB.
module.exports = {
  mongoConnect,
};

```
