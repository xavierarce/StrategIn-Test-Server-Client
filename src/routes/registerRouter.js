const express = require("express");
const registerController = require("../controllers/registerController");

const registerRouter = express.Router();

//  Route permettant l'inscription d'un nouvel utilisateur.
registerRouter.post("/", registerController.registerUser);

module.exports = registerRouter;
