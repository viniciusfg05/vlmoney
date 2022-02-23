import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransitionsTable() {
  //precisamos criar um estado, começando o estado com array vazio
  const [ transactions, setTransactions ] = useState([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => console.log(response.data)) //console .log nos dados
  }, [])


  //add a "api" que é a const que criamos no srquivo api em services e colocamos ele para "get"
  //Não precisamos mais da conversão do .json
  // já onde estava (data => console.log(data)) vamos trocar por (response => console.log(response.data)) 
  
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