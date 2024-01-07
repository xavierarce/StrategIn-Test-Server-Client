import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    alert("Veuillez vous connecter pour accéder");
    return <Navigate to={"/"} replace />;
  }


  return element;
};

export default PrivateRoute;
