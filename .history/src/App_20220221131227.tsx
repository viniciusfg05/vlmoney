import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboards />
      <GlobalStyles />
    </>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 