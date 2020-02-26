import React from "react";
import { SCNav as SC } from "./Nav.styled";

const Nav = () => (
  <SC.Nav>
    <h1>damien hervieux</h1>
    <SC.List>
      <SC.ListItem>
        <SC.Link to="/projects">projects</SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link to="/skills">skills</SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link to="/work">work</SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link to="/about">about me</SC.Link>
      </SC.ListItem>
    </SC.List>
  </SC.Nav>
);

export default Nav;
