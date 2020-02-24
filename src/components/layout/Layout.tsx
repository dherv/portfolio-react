import React, { FC } from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../../styled/GlobalStyle";
import Nav from "./Nav";
import { SCLayout as SC } from "./Layout.styled";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <header>
        <Nav />
      </header>
      <SC.Main>{children}</SC.Main>
    </>
  );
};

export default Layout;
