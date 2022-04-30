import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary:#5429CC;
    --secondary:#33CC95;
    --therdiary: #E52E4D
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  button{
    border: none;
    outline: none;
    cursor: pointer
  }
`;
