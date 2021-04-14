import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "./Container/Container";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Registration {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route path="/dashboard" render={(props) => <Container {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
