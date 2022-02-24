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

//usando um sintaxe 
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//Aq diz basicamente que "TransactionInput" vai erdar todos os compos "Transaction" menos id e createAt, pq estamos omitindo eles outra forma é usar no lugar de "Omit" o "Pick" nele eu infomor quais campos eu quero


interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export function TransactionProvider({children}: TransactionsProviderProps) {

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput) {
  api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

// 
//
//