const express = require("express");
const loginController = require("../controllers/loginController");

const loginRouter = express.Router();

// Route permettant la connexion d'un utilisateur.
// Message de succès et token d'authentification en cas de succès
loginRouter.post("/", loginController.loginUser);

module.exports = loginRouter;
