import styled from "styled-components";
import { Link } from "react-router-dom";

export const SCProjects = {
  List: styled.ul`
    display: flex;
    margin-bottom: 2rem;
  `,
  ListItem: styled.li`
    margin-right: 3rem;
    font-family: var(--second-font);
    font-size: 2rem;
  `,
  RouterLink: styled(Link)`
    background-color: rgba(67, 83, 255, 0.1);
    color: rgba(67, 83, 255, 1);
    padding: 1rem;
    font-family: var(--main-font);
    font-size: 1rem;
  `
};
