import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
};

export default App;
