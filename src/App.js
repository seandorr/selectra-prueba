import React, { useState, useEffect } from "react";
import axios from "axios";
import Contacts from "./components/Contacts";
import "./styles/main.scss";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setData(results.data);
    });
  }, []);

  return (
    <div className="main-container">
      <Contacts data={data} />
    </div>
  );
};

export default App;
