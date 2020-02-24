import React from "react";
import { SCProjects as SC } from "./Projects.styled";
import { NavLink as Link, Route } from "react-router-dom";
import ProjectsContent from "../components/projects/ProjectsContent.json";
import ProjectsLayout from "../components/projects/ProjectsLayout";

const Projects = () => (
  <div>
    <SC.List>
      <SC.ListItem>
        <Link to="/projects/watchers">watchers</Link>
      </SC.ListItem>
      <SC.ListItem>
        <Link to="/projects/nikki">nikki</Link>
      </SC.ListItem>
      <SC.ListItem>
        <Link to="/projects/jiujitheory">jiuji theory</Link>
      </SC.ListItem>
      <SC.ListItem>
        <Link to="/projects/work">work</Link>
      </SC.ListItem>
    </SC.List>
    <Route
      path={`/projects/watchers`}
      component={() => <ProjectsLayout content={ProjectsContent["watchers"]} />}
    />
    <Route
      path={`/projects/nikki`}
      component={() => <ProjectsLayout content={ProjectsContent["nikki"]} />}
    />
    <Route
      path={`/projects/jiujitheory`}
      component={() => (
        <ProjectsLayout content={ProjectsContent["jiujiTheory"]} />
      )}
    />
    <Route
      path={`/projects/work`}
      component={() => <ProjectsLayout content={ProjectsContent["work"]} />}
    />
  </div>
);
export default Projects;
