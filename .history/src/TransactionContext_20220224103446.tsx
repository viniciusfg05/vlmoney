//importa createContext
//createContext([]); -> vamos passar qual o valore padrão dele, valor que vai inicializar, iniciando com um vetor vazio []
//Quando a gente cria uma contexto, podemos acessa-lo de qualquer componente na nossa aplicação, mas para que les tenham acesso precisamos colocar por volta do conxto o "Provider"
//como esse coxto vai precisar ser acessado por varios components, vamos colocar o PRovider por volta do App.tsx


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

// Sempre que vamos tipar um children, vamos usar o ReactNode do 'react'
// ReactNode aceita todo tipo de conteudo valido no react 
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

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}