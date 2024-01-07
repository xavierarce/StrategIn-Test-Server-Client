import React, { useContext, useEffect, useState } from "react";
import "./AuthPages.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const EmptyLoginValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginValues, setLoginValues] = useState(EmptyLoginValue);
  const { setCurrentUser } = useContext(UserContext);
  const { email, password } = loginValues;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Email et mot de passe requis");

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token-strateg',data.accessToken)
        return setCurrentUser(data.userInfo);
      } else {
        throw new Error(data.error || "Incorrect");
      }
    } catch (error) {
      if (error.message === "Incorrect Credential") {
        return alert("Identifiants incorrects");
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    localStorage.removeItem('token-strateg')
  }, []);

  return (
    <div className="AuthPage">
      <div className="AuthPage-Box">
        <h2 className="AuthPage-text">Connexion</h2>
        <form className="AuthPage-container" onSubmit={handleSubmit}>
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
            <Link to={"/register"}>
              <button className="Form-Button Form-Button-redirect">
                Inscription
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
