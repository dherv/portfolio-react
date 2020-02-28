import React from "react";
import { SCNav as SC } from "./Nav.styled";

const activeStyle = {
  borderBottom: "1px solid"
};
const Nav = () => (
  <SC.Nav>
    <SC.Title>damien hervieux</SC.Title>
    <SC.List>
      <SC.ListItem>
        <SC.Link activeStyle={activeStyle} to="/projects">
          projects
        </SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link activeStyle={activeStyle} to="/skills">
          skills
        </SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link activeStyle={activeStyle} to="/work">
          work
        </SC.Link>
      </SC.ListItem>
      <SC.ListItem>
        <SC.Link activeStyle={activeStyle} to="/about">
          about me
        </SC.Link>
      </SC.ListItem>
    </SC.List>
  </SC.Nav>
);

export default Nav;
