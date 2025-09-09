import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PaginaInicial from "./pages/PaginaInicial";
import Doce from "./pages/Doce";
import Salgado from "./pages/Salgado";
import Limitada from "./pages/Limitada";
import Sobre from "./pages/Sobre";
import '../src/global.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/paginainicial" element={<PaginaInicial />} />
          <Route path="/receitas/doces" element={<Doce />} />
          <Route path="/receitas/salgadas" element={<Salgado />} />
          <Route path="/receitas/Limitada" element={<Limitada />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;