import React from "react";
import { SCProjects as SC } from "./Projects.styled";
import { NavLink as Link, Route } from "react-router-dom";
import ProjectsContent from "../components/projects/ProjectsContent.json";
import ProjectsLayout from "../components/projects/ProjectsLayout";

const Projects = () => (
  <div>
    <SC.List>
      <SC.ListItem>
        <SC.RouterLink to="/projects/watchers">watchers</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/projects/nikki">nikki</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/projects/jiujitheory">jiuji theory</SC.RouterLink>
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
  </div>
);
export default Projects;
