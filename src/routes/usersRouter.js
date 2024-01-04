const express = require("express");
const userController = require("../controllers/usersController");
const authenticateToken = require("../middlewares/authMiddleware");

const usersRouter = express.Router();

// Route permettant d'obtenir la liste des utilisateurs enregistrés sur la plateforme.
// Requiert un token d'authentification.
usersRouter.get("/",authenticateToken, userController.getUsers);

module.exports = usersRouter;
