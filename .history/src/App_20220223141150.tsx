import { Dashboard } from './components/Dashboards';
import Modal from 'react-modal'
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/newTransactionModal';
import { TransactionContext } from './TransactionContext';

Modal.setAppElement('#root');

export function App() {
  //cofigurando modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)//inicia como false

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('transactions') //rota possivelmente criariamos no futuro
    .then(response => setTransactions(response.data.transactions))
  }, [])

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true) 
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    //ele receber um value desse contexto, preechemos o valor carregado do contexto
    <TransactionContext.Provider value={[]} >
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} //passa o estado da aplicação 
        onRequestClose={handleCloseNewTransactionModal}
      />

      
      <GlobalStyles />
    </TransactionContext.Provider>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 