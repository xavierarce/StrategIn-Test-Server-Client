const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

// Contrôleur pour la connexion d'un utilisateur
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ status: "error", error: "Email and password required" }); // Vérification si l'email et le mot de passe sont présents
  }

  try {
    const user = await User.findOne({ email }).lean(); // Recherche de l'utilisateur dans la base de données par email

    if (!user) {
      return res.json({ status: "error", error: "Incorrect Credential" }); // Vérification si l'utilisateur existe
    }

    // Vérification du mot de passe en le comparant avec celui stocké dans la base de données
    if (await bcrypt.compare(password, user.password)) {
      // Génération d'un token d'authentification avec payload et secret, expirant en 1 jour
      const accessToken = jwt.sign(
        {
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET_TOKEN,
        { expiresIn: "1d" } //Modifier au besoin
      );
      // Retourne une réponse réussie avec le token d'authentification
      return res
        .status(200)
        .json({ status: "success", accessToken: accessToken });
    }
    // En cas de mot de passe incorrect
    return res.json({ status: "error", error: "Incorrect Credential" });
  } catch (error) {
    // Gestion des erreurs internes du serveur
    console.error(error.message);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
};

module.exports = { loginUser };
