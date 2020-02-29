import styled from "styled-components";

export const SCProjectsLayout = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0 3rem 0;
  `,
  FlexContainer: styled.div`
    display: flex;
  `,
  Icons: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `,
  IconItem: styled.li`
    margin: 0.5rem 1rem;
  `,
  Image: styled.img`
    width: 650px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  `
};
