import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

const NoUserRoute = ({ element }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to={"/user"} replace />;
  }

  return element;
};

export default NoUserRoute;
