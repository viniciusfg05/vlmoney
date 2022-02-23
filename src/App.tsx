import { Dashboard } from './components/Dashboards';
import Modal from 'react-modal'
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/newTransactionModal';

Modal.setAppElement('#root');

export function App() {
  //cofigurando modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)//inicia como false

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true) 
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} //passa o estado da aplicação 
        onRequestClose={handleCloseNewTransactionModal}
      />

      
      <GlobalStyles />
    </>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 