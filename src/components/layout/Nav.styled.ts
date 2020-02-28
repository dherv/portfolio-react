import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const SCNav = {
  Nav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 7rem;
  `,
  Title: styled.h1`
    font-family: Caveat;
  `,
  List: styled.ul`
    display: flex;
    align-items: center;
  `,
  ListItem: styled.li`
    margin: 0 1rem;
  `,
  Link: styled(RouterLink)`
    color: #000;
  `
};
