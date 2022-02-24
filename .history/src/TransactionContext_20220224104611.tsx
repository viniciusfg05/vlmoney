import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: number; //depois vou precisar converter para uma data
}


interface transactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}

//usando um sintaxe 
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;



interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionProvider({children}: TransactionProviderProps) {

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction) {
  //   //inserindo na api
  //   const data = {
  //     title,
  //     value,
  //     category,
  //     type

    //nao preciso mais

  // };

  api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}