import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary:#5429CC;
    --secondary:#33CC95;
    --therdiary: #E52E4D;
    --gray-700:#2D3748;

    //fonts
    --font-Merri: 'Merriweather', serif;
    --font-Poppins: 'Poppins', sans-serif;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,a,input,button,textarea{
    font-family: var(--font-Poppins)
  }

  html{
    font-size: 1rem;
  }

  button,input{
    border: none;
    outline: none;
  }

  button{
    cursor: pointer
  }

`;
