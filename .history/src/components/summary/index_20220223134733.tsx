import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';


import { Container } from "./styles";

 export function Summary() {
  return (


    //vamos usar um api um pouco antiga mas ainda presente em projeto mais antigos RendleProps
    //vamos chamr o contexto e passar um propriedade consumer - "TransactionContext.Consumer"
    //passar um função, que recebe meu dados
    <Container >
      <TransactionContext.Consumer>
        {(data) => {
          console.log(data)
          return <p>Oi</p>
          }}
      </TransactionContext.Consumer>
    



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