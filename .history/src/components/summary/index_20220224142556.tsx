import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';


import { Container } from "./styles";

 export function Summary() {
   //desse jeito ja temos o valor de data pra gente / contexto
  const transactions = useContext(TransactionsContext);
  
  //Percorremos o "transactions", depois vamos da um 
  //"reduce()" para passar por todas as transações e dentro dele "acc" acumulator a "transaction" com uma arrow fuction passando o valor inical zero
  //dentro da arrowFunction: 
  const totalDeposit = transactions.reduce((acc, transaction) => {
    if (transaction.tipe === 'deposit') {
      return acc + transaction.amount;
    }
  }, 0)

  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="light-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container >
  )
 }