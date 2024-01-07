import React from "react";
import { Link } from "react-router-dom";

const ErrorRoute = () => {
  return (
    <div>
      Cette page n'existe pas! S'il vous plaît, revenons à la page d'accueil
      <Link to={'/'}>
        <button>Accueil</button>
      </Link>
    </div>
  );
};

export default ErrorRoute;
