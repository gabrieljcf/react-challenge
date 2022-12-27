import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
  }
`;