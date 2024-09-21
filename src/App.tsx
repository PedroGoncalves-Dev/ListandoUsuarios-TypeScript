//estilização
import "./App.css";
//components
import Cabecalho from "./components/Cabecalho/Cabecalho";
import RodaPe from "./components/RodaPe/RodaPe";
import NavLateral from "./components/AsideNav/AsideNav";
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashborad/DashBoard";
import Clientes from "./pages/clientes/clientes";

function App() {
  return (
    <div className="app">
      <Cabecalho />

      <NavLateral />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/clientes" element={<Clientes />} />
          </Routes>
        </main>
      </BrowserRouter>

      <RodaPe />
    </div>
  );
}

export default App;
