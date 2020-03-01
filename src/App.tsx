import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Layout from "./components/layout/Layout";
import Work from "./pages/Work";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/about" />
          <Redirect from="/projects" exact to="/projects/watchers" />
          <Redirect from="/work" exact to="/work/naviboard" />

          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
