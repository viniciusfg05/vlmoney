import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionContext';



export function TransitionsTable() {
  //pega as transactions do contexto
  const transactions = useContext(TransactionContext)

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
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(transaction.createdAt)}
                </td>
                  
                
              </tr>
            //Para tirar o retur tiramos as {} por ()

            //começou a da erro pq ele não consegue entender a tipagem do transaction
          ))}
        </tbody>
      </table>
    </Container>
  )
}