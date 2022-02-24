import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';


import { Container } from "./styles";

 export function Summary() {
   //desse jeito ja temos o valor de data pra gente / contexto
    const {transactions} = useContext(TransactionsContext);
  
  //Percorremos o "transactions", depois vamos da um 
  //"reduce()" para passar por todas as transações e dentro dele "acc" acumulator a "transaction" com uma arrow fuction passando o valor inical e objeto pq são dois intens deposit e withdraw
  //
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc; //retorno o acumulator no final
    //reduce precisa que sempre return o acc com as mudanças
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });


  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{summary.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>{summary.withdraws}</strong>
      </div>

      <div className="light-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{summary.total}</strong>
      </div>
    </Container >
  )
 }