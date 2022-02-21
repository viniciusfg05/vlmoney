import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --roxo: #5429CC;
    --green: #33CC95;
    --red: #E62E4D;
    --shape-principal: #FFFFFF;
    --titulo: #363F5F;
    --Textos: #969CB3;
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
`