const validator = require("validator");

// Validation du format de l'email avec une expression régulière
const validateEmail = (email) => {
  if (!email) throw new Error("Email Required");
  if (typeof email !== "string") throw new Error("Invalid Email");

  // Validation du format de l'email avec une expression régulière
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid Email Format");
  }

  // Utilisation du module Validator pour une validation plus approfondie
  if (!validator.isEmail(email)) {
    throw new Error("Invalid Format");
  }
};

const validateUsername = (username) => {
  if (!username) throw new Error("Username Required");
  if (typeof username !== "string") throw new Error("Invalid Username");
};

const validatePassword = (password) => {
  if (!password) throw new Error("Password Required");
  if (typeof password !== "string") throw new Error("Invalid Password");

  // Validation de la longueur et du format du mot de passe
  const minLength = 8;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (password.length < minLength || !passwordRegex.test(password)) {
    throw new Error(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit"
    );
  }
};

module.exports = {
  validateEmail,
  validateUsername,
  validatePassword,
};
