const User = require("../models/User.model");

// Contrôleur pour obtenir la liste des utilisateurs
const getUsers = async (req, res) => {
  const Users = await User.find({}, { username: 1, _id: 0 });
  const usernames = Users.map((user)=>user.username)  //! Si vous voulez uniquement les noms
  res.json({ usernames });
  // res.json({ Users });
};

module.exports = { getUsers };
