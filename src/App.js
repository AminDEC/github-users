import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { responsiveProperty } from "@mui/material/styles/cssUtils";

function App() {
  const [Users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((Response) => Response.json())
      .then(setUser);
  });
  if (Users) {
    return (
      <div className="App">
        <img src="/159.jpg" alt="" className="img__back" />
        <div className="card">
          <ul className="list">
            {Users.map((User) => (
              <li className="list__item">
                <Card user={User} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>No Data</h1>
      </div>
    );
  }
}

export default App;
