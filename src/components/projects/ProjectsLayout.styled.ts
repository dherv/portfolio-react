import styled from "styled-components";

export const SCProjectsLayout = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7rem 0 3rem 0;
  `,
  FlexContainer: styled.div`
    display: flex;
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 2.5rem;
  `,
  Paragraph: styled.p`
    width: 75%;
    margin: 2rem 0;
    font-size: 20px;
    line-height: 1.5;
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
  `,
  ButtonVisit: styled.button`
    margin-left: auto;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: rgba(67, 83, 255, 0.4);
    color: #fff;
  `
};
