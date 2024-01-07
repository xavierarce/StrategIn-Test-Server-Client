import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/MainApp/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/AuthPages/Login";
import Register from "./routes/AuthPages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import { UserProvider } from "./context/userContext";
import NoUserRoute from "./routes/NoUserRoute";
import ErrorRoute from "./routes/ErrorRoute";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <PrivateRoute element={<App />} />,
    errorElement:<ErrorRoute/>
  },
  {
    path: "/",
    element: <NoUserRoute element={<Login />} />,
    errorElement:<ErrorRoute/>
  },
  {
    path: "/register",
    element: <NoUserRoute element={<Register />} />,
    errorElement:<ErrorRoute/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
