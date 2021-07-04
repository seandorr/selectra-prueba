import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Contacts from "./components/Contacts";
import "./styles/main.scss";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setData(results.data);
    });
  }, []);

  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route path="/" exact>
            <Contacts data={data} />
          </Route>
          {data.map((contact) => {
            const { name, id } = contact;
            return (
              <Route path={`/${name}`} key={id}>
                <ContactDetails contact={contact} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
