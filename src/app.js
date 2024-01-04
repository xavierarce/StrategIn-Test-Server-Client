const express = require("express");
const app = express();

app.use(express.json());

// Importation et utilisation des gestionnaires de routes
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const usersRouter = require("./routes/usersRouter");

app.use("/register", registerRouter); // Route d'inscription
app.use("/login", loginRouter); // Route de connexion
app.use("/users", usersRouter); // Route des utilisateurs

module.exports = app;
