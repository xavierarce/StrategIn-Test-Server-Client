const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const {
  validateEmail,
  validateUsername,
  validatePassword,
} = require("../middlewares/validationFunctions");

// Contrôleur pour l'inscription d'un nouvel utilisateur
const registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    validateEmail(email);
    validateUsername(username);
    validatePassword(password);

    const hashedPassword = await bcrypt.hash(password, 12); // Hachage du mot de passe

    const response = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(response);
    res.status(201).json({ status: "success", response });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", error: error.message });
  }
};

module.exports = { registerUser };
