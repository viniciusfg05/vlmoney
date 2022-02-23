//importa createContext
//createContext([]); -> vamos passar qual o valore padrão dele, valor que vai inicializar, iniciando com um vetor vazio []
//Quando a gente cria uma contexto, podemos acessa-lo de qualquer componente na nossa aplicação, mas para que les tenham acesso precisamos colocar por volta do conxto o "Provider"


import { createContext } from 'react'

export const TransactionContext = createContext([]);