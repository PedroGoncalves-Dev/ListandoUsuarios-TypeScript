//estilização
import "./App.css";
//components
import Cabecalho from "./components/Cabecalho/Cabecalho";
import RodaPe from "./components/RodaPe/RodaPe";
import NavLateral from "./components/AsideNav/AsideNav";

function App() {
  return (
    <div className="app">
      <Cabecalho />

      <NavLateral />

      <main></main>

      <RodaPe />
    </div>
  );
}

export default App;
