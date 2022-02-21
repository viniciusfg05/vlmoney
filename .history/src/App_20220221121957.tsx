import styled from 'styled-components'
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <div className="App">
     <h1>Hello World</h1> 
    </div>

    <GlobalStyles />
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 