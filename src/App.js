import React, { useState, useEffect } from "react";
import "./reset.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Route exact path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
