import styled from 'styled-components'

//componente estilizavel como componente
const Title = styled.h1`
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
     <Title>Hello World</Title>
    </div>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 