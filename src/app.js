const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000", 
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions))
app.use(express.json());

// Importation et utilisation des gestionnaires de routes
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const usersRouter = require("./routes/usersRouter");

app.use("/register", registerRouter); // Route d'inscription
app.use("/login", loginRouter); // Route de connexion
app.use("/users", usersRouter); // Route des utilisateurs

module.exports = app;
