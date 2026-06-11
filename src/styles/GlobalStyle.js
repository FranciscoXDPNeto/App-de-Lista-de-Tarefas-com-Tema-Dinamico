import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.fundo};
    color: ${({ theme }) => theme.texto};
    transition: 0.3s;
  }

  main {
    width: 90%;
    max-width: 700px;
    margin: 40px auto;
  }

  p {
    text-align: center;
    margin-top: 20px;
  }
`;

export default GlobalStyle;
