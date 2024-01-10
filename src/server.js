// Importation des modules nécessaires
if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}
import http from "http";
import mongoConnect from "./services/mongo.js";
import app from "./app.js";

// Configuration du port du serveur
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();
