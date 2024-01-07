import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "../../context/userContext";

const App = () => {
  const [userList, setUserList] = useState();
  const {setCurrentUser} = useContext(UserContext);

  const hanldeLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("token-strateg");
  };

  const handleGetUsers = async () => {
    const storedToken = localStorage.getItem("token-strateg");

    try {
      if (storedToken) {
        const response = await fetch("http://localhost:8000/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const data = await response.json();
        return setUserList(data.usernames);
      } else {
        throw new Error("No permission");
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="user-interface">
      <button className="button-logout" onClick={hanldeLogOut}> Logout</button>
        <h2>Bienvenue!</h2>
        <h4>Afficher tous les utilisateurs:</h4>
        <div className="App-buttons">
          <button className="display-button" onClick={handleGetUsers}>
            Afficher
          </button>
          <button className="display-button" onClick={() => setUserList(null)}>
            Cacher
          </button>
        </div>
        <div>{userList ? userList.map((user,idx) => <p key={idx}>{user}</p>) : null}</div>
      </div>
    </div>
  );
};

export default App;
