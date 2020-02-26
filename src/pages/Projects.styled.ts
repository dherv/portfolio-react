import styled from "styled-components";

export const SCProjects = {
  List: styled.ul`
    display: flex;
    margin-bottom: 2rem;
  `,
  ListItem: styled.li`
    margin-right: 3rem;
    font-family: var(--second-font);
    font-size: 2rem;
    a {
      color: var(--second-color-text);
    }
  `
};
