import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Container, TrasactionTypeContainer, RadioButton } from "./styles";
import { TransactionsContext } from '../../TransactionContext';
import { api } from "../../services/api"; 
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"


interface NewTransactionModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModaProps) {
    //Tranzendo o contexto
    const transactions = useContext(TransactionsContext)


    //Para armazenar os estados do formularia
    const [ title, setTitle ] = useState("");
    const [ value, setValue ] = useState(0);
    const [ category, setCategory ] = useState("")


    const [type, setType] = useState('deposit');

    //função de capturar as informaçoes do modal
    function handleCreateNewTransactionModal(event: FormEvent) {
        event.preventDefault();

        
        
    }
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay" //Para mudar a class do modal    
        className="react-modal-content" //Nova class do modal
        > 

        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="fechar modal" />
        </button>
        <Container onSubmit={handleCreateNewTransactionModal}>
            <h2>Cadastrar transação</h2>
            
            
            <input 
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)} //Uma função que executa, toda vez que um novo texto for digitado no input
            />
            

            <input 
            type="number"
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))} //Uma função que executa, toda vez que um novo texto for digitado no input
            />

            <TrasactionTypeContainer>
                <RadioButton
                type="button"
                isActive={type === 'deposit'}  //nome que eu quiser dar
                activeColor="green"
                onClick={() => setType('deposit')}
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioButton>

                <RadioButton
                    type="button"
                    isActive={type === 'withdraw'}  //nome que eu quiser dar
                    activeColor="red"
                    onClick={() => setType('withdraw')}
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioButton>
            </TrasactionTypeContainer>

            <input
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)} //Uma função que executa, toda vez que um novo texto for digitado no input
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
      </Modal>
    );
}

function TransactionContext(TransactionContext: any) {
    throw new Error("Function not implemented.");
}
