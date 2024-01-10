import express from "express"
import loginUser from "../controllers/loginController.js";

const loginRouter = express.Router();

// Route permettant la connexion d'un utilisateur.
// Message de succès et token d'authentification en cas de succès
loginRouter.post("/", loginUser);

export default loginRouter;
