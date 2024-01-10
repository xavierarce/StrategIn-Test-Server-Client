import mongoose from "mongoose";

// Schéma Mongoose pour représenter un utilisateur
const UsersSchema = new mongoose.Schema({
  // Nom d'utilisateur unique et obligatoire
  username: { type: String, required: true, unique: true },

  // Mot de passe obligatoire
  password: { type: String, required: true },

  // Adresse e-mail unique, obligatoire, et convertie en minuscules
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const UserModel = mongoose.model("user", UsersSchema);

export default UserModel;
