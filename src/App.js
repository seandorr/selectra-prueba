import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/main.scss";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setData(results.data);
    });
  }, []);

  console.log(data);

  return <h1>una prueba</h1>;
};

export default App;
