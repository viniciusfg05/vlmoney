import { Summary } from "../summary";
import { TransitionsTable } from "../transaction";
import { Container } from "./styles";

 export function Dashboard() {
   return (
    <Container>
    <Summary />
    <TransitionsTable />
    </Container>
   )
 }