import express from "express";
import getUsers from "../controllers/usersController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const usersRouter = express.Router();

// Route permettant d'obtenir la liste des utilisateurs enregistrés sur la plateforme.
// Requiert un token d'authentification.
usersRouter.get("/", authenticateToken, getUsers);

export default usersRouter;
