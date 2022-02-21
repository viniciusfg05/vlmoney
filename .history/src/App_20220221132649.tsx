import { Dashboard } from './components/Dashboards';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}

//export default App: pq nao usar que quem defini o nome da exportação é o importação e não a exportação 