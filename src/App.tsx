import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styled/GlobalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Normalize />
      <GlobalStyle />
      <header>
        <h1>damien hervieux</h1>
        <ul>
          <li>projects</li>
          <li>works</li>
          <li>skills</li>
          <li>about me</li>
        </ul>
      </header>
      <main>
        <Switch></Switch>
      </main>
    </Router>
  );
};

export default App;
