import express from "express";
import cors from "cors";
const app = express();

const corsOptions = {
  origin: "http://localhost:3000", 
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions))
app.use(express.json());

// Importation et utilisation des gestionnaires de routes
import registerRouter from "./routes/registerRouter.js";
import loginRouter from "./routes/loginRouter.js";
import usersRouter from "./routes/usersRouter.js";

app.use("/register", registerRouter); // Route d'inscription
app.use("/login", loginRouter); // Route de connexion
app.use("/users", usersRouter); // Route des utilisateurs

export default app