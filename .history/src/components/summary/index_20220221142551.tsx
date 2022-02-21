import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


import { Container } from "./styles";

 export function Summary() {
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
          <p>Entradas</p>
          <img src={incomeImg} alt="Saidas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="total" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container >
  )
 }