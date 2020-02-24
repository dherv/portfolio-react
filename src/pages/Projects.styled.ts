import styled from "styled-components";

export const SCProjects = {
  List: styled.ul`
    display: flex;
    margin-bottom: 2rem;
  `,
  ListItem: styled.li`
    margin-right: 2rem;
    font-family: var(--second-font);
    font-size: 1.5rem;
    a {
      color: var(--second-color-text);
    }
  `
};
