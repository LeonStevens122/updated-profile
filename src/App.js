import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Header from "./components/Header";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="main-app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
