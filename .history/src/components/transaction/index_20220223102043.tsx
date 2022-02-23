import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string; //depois vou precisar converter para uma data
}

export function TransitionsTable() {
  //precisamos criar um estado, começando o estado com array vazio
  // Mudar o response para setTransactions(response.data)

  //Precisamo percorrer cada uma das transações

  //add o map() no tbody

  //Vamos criar um interface tipificando as transações
  //no estado vamos colocação da tipificação 

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => setTransactions(response.data))
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
          { transactions.map(transaction => (
              <tr>
                <td>{transaction.title}</td>
                <td className="deposite">{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createAt}</td>
              </tr>
            //Para tirar o retur tiramos as {} por ()

            //começou a da erro pq ele não consegue entender a tipagem do transaction
          ))}
        </tbody>
      </table>
    </Container>
  )
}