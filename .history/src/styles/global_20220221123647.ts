import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --roxo: #5429CC;
    --roxo-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --title-body: #363F5F;
    --text-body: #969CB3;
  }

  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 15px
    }
  }

  body {
    background: var(--background) ;
    -webkit-font-smothing: antialiased; //para font ficar mais nitida
  }

  border-style, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed; //nao permitido
  }
`