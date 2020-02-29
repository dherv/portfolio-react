import React from "react";
import { SCProjects as SC } from "./Projects.styled";
import { Route } from "react-router-dom";
import WorkLayout from "../components/projects/WorkLayout";
import WorkContent from "../components/projects/WorkContent.json";

const Work = () => (
  <div>
    <SC.List>
      <SC.ListItem>
        <SC.RouterLink to="/work/naviboard">naviboard</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/work/loco">loco</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/work/rflocus">RF Locus</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/work/motivo">motivo</SC.RouterLink>
      </SC.ListItem>
      <SC.ListItem>
        <SC.RouterLink to="/work/chatbot">chat bot</SC.RouterLink>
      </SC.ListItem>
    </SC.List>
    <Route
      path={`/work/naviboard`}
      component={() => <WorkLayout content={WorkContent["naviboard"]} />}
    />
    <Route
      path={`/work/loco`}
      component={() => <WorkLayout content={WorkContent["loco"]} />}
    />
    <Route
      path={`/work/rflocus`}
      component={() => <WorkLayout content={WorkContent["rflocus"]} />}
    />
    <Route
      path={`/work/motivo`}
      component={() => <WorkLayout content={WorkContent["motivo"]} />}
    />
    <Route
      path={`/work/chatbot`}
      component={() => <WorkLayout content={WorkContent["chatbot"]} />}
    />
  </div>
);
export default Work;
