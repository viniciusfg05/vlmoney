import { Container } from "./styles";

export function transitionsTable() {
  return (
    <Container>
      <table>
        <thead >
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000</td>
            <td>Programação</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000</td>
            <td>Programação</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000</td>
            <td>Programação</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}