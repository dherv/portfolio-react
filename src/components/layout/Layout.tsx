import React, { FC } from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../../styled/GlobalStyle";
import Nav from "./Nav";
import { SCLayout as SC } from "./Layout.styled";
import { Github, Linkedin } from "styled-icons/boxicons-logos";
import styled from "styled-components";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <header>
        <Nav />
      </header>
      <SC.Main>{children}</SC.Main>
      <Footer>
        <IconContainer>
          <a href="https://github.com/dherv" target="blank">
            <GithubIcon size="32"></GithubIcon>
          </a>
        </IconContainer>

        <IconContainer>
          <a href="https://www.linkedin.com/in/dherv" target="blank">
            <LinkedinIcon size="32"></LinkedinIcon>
          </a>
        </IconContainer>
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 7rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(67, 83, 255, 0.1);
  color: rgba(67, 83, 255, 1);
  padding: 0.5rem;
  margin: 0 1rem;
  font-family: var(--main-font);
  font-size: 1rem;
`;
const GithubIcon = styled(Github)`
  color: rgba(67, 83, 255, 0.8);
`;
const LinkedinIcon = styled(Linkedin)`
  color: rgba(67, 83, 255, 0.8);
`;
export default Layout;
