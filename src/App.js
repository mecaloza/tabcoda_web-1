import React, { useState, useEffect } from "react";
import "./reset.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Mobile from "./Mobile";
import New2 from "./New2";
import TopBar from "./TopBar";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log("cesar");

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/mobile">
              <Mobile />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
