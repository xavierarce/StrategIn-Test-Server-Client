import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AuthPages.css";
import StrategIn from "../../assets/STRATEGINLogo.png";

const EmptyRegisterValue = {
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const [registerValues, setRegisterValues] = useState(EmptyRegisterValue);
  const { email, password, username } = registerValues;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !username || !password)
      return alert("Email , username, et mot de passe requis");
    try {
      if (!username || !email || !password)
        return alert("Please fill in all required fields");

      const response = await fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerValues),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Créé! Veuillez vous connecter");
      } else {
        throw new Error(data.error || "Registration failed");
        // Display an error message if registration failed
      }
    } catch (error) {
      if (error.message.includes("email_1 dup key"))
        return alert("Email Already in use ");
      if (error.message.includes("username_1 dup key"))
        return alert("Username Already in use ");
      if (error.message.includes("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit"))
        return alert("Votre mot de passe doit être composé d'au moins 8 caractères, incluant au moins une lettre majuscule, une lettre minuscule, et un chiffre");
      return console.log(error.message);
    }
  };
  useEffect(() => {
    localStorage.removeItem('token-strateg')
  }, []);

  return (
    <div className="AuthPage">
      <div className="AuthPage-Box">
      <img className="StrategIn-logo" alt="strategIn" src={StrategIn}/>
        <h2 className="AuthPage-text">Inscription</h2>
        <form className="AuthPage-container" onSubmit={handleSubmit}>
          <div className="label-input">
            <label className="AuthPage-text">Nom d'utilisateur</label>
            <input
              onChange={onInputChange}
              className="input-box"
              name="username"
              type="text"
              required
              value={username}
            />
          </div>
          <div className="label-input">
            <label className="AuthPage-text">Email</label>
            <input
              onChange={onInputChange}
              className="input-box"
              name="email"
              type="email"
              required
              value={email}
            />
          </div>
          <div className="label-input">
            <label className="AuthPage-text">Mot de passe</label>
            <input
              onChange={onInputChange}
              className="input-box"
              name="password"
              type="password"
              required
              value={password}
            />
          </div>
          <div className="Form-Buttons">
            <button className="Form-Button">Soumettre</button>
            <Link to={"/"}>
              <button className="Form-Button Form-Button-redirect">
                Connexion
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
