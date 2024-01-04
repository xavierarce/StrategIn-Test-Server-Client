const jwt = require("jsonwebtoken");

// Middleware pour l'authentification basée sur le token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Vérification de la présence du token
  if (token == null) return res.sendStatus(401);

  // Vérification du token avec la clé secrète
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
    console.log(process.env.JWT_SECRET_TOKEN);

    // Gestion des erreurs de vérification du token
    if (err) return res.status(403).json({ status: "Forbidden", error: err });

    // Attachement de l'utilisateur vérifié à la requête
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
