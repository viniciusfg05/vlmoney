import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <h1>Hello World</h1> 
      <Header />
      <GlobalStyles />
    </>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 