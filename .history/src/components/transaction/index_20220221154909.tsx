import { useEffect } from "react";
import { Container } from "./styles";


export function TransitionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
  }, [])

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
            <td className="deposite">R$ 12.000</td>
            <td>Programação</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 5.000</td>
            <td>Moradia</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}