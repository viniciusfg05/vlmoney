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
  //no estado vamos colocação da tipificação "useState<Transaction[]>([]);" armazena um array de transaction

  //Toda vez que faço um map preciso  passar um <tr key={transaction.id}>

  //Erro (index.tsx:52 Uncaught TypeError: transactions.map is not a function) - A nossa requisição da api quando damos  console.log(response.data)) ele retorna uma objeto "transactio" e não diretamente uma array "transactions" , => "setTransactions(response.data.transactions))"

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => setTransactions(response.data.transactions))
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
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            //Para tirar o retur tiramos as {} por ()

            //começou a da erro pq ele não consegue entender a tipagem do transaction
          ))}
        </tbody>
      </table>
    </Container>
  )
}