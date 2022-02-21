import { Container } from "./styles";
import { incomeImg } from '../../assets/income';

 export function Summary() {
  return (

    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
      </div>
    </Container >
  )
 }