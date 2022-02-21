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

  body {
    background: var(--background) ;
    -webkit-font-smothing: antialiased;
  }
`