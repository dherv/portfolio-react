import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --font-main: "Raleway", "Roboto", "Helvetica Neue", Arial, sans-serif;
      --font-text: "Open Sans", Arial, sans-serif;
      --font-color-main: #767676;
      --font-color-title: #484848;
      --font-color-dark: #212121;
      --color-main: #26A69A; // rgba(38, 166, 154, 1)
      --color-main-light: rgba(38, 166, 154, .6)
    }

    // HTML Tags
    html {
      box-sizing: border-box;
      font-size: 16px;
      font-family: var(--font-main);
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    ol, ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      text-decoration: none
    }

    input, textarea, button, a {
      outline: none;
    }

    textarea {
      resize: none;
    }
`;
