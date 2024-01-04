const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

// Contrôleur pour la connexion d'un utilisateur
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ status: "error", error: "Email and password required" });
  }

  try {
    const user = await User.findOne({ email }).lean();
    console.log("prueba", user);
    if (!user) {
      return res.json({ status: "error", error: "Incorrect Credential" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        {
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET_TOKEN
      );
      return res.status(200).json({ status: "success", accessToken:accessToken });
    }

    return res.json({ status: "error", error: "Incorrect Credential" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
};

module.exports = { loginUser };
