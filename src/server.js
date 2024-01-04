// Importation des modules nécessaires
require("dotenv").config();
const http = require("http");
const { mongoConnect } = require("./services/mongo");
const app = require("./app");

// Configuration du port du serveur
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();
