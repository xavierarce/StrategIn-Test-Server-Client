import express from "express"
import registerUser from "../controllers/registerController.js"

const registerRouter = express.Router();

//  Route permettant l'inscription d'un nouvel utilisateur.
registerRouter.post("/", registerUser);

export default registerRouter;
