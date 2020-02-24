import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styled/GlobalStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      <Normalize />
      <GlobalStyle />
      <header>
        <h1>damien hervieux</h1>
        <ul>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/skills">skills</Link>
          </li>
          <li>
            <Link to="/about">about me</Link>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
