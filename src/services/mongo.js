const mongoose = require("mongoose");

// Configuration des événements de connexion à MongoDB
mongoose.connection.once("open", () => console.log("MongoDB connection ready"));
mongoose.connection.on("error", (err) => console.error(err));

// Fonction asynchrone pour se connecter à MongoDB
const mongoConnect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

module.exports = {
  mongoConnect,
};
