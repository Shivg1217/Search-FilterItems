import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const [findData, setFindData] = useState("");

  useEffect(() => {
    usersHandler();
  }, []);

  const usersHandler = async (e) => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(result.data);
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search..."
        onChange={(e) => setFindData(e.target.value)}
      />
      {users
        .filter((val) => {
          if (findData === "") {
            return val;
          } else if (val.name.toLowerCase().includes(findData.toLowerCase())) {
            return val;
          }
        })
        .map((userdata) => (
          <p>{userdata.name}</p>
        ))}
    </div>
  );
}

export default App;
