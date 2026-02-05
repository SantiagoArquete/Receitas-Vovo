import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarBoot from "./components/SidebarBoot";
import PaginaInicial from "./pages/PaginaInicial";
import Doce from "./pages/Doce";
import Salgado from "./pages/Salgado";
import Limitada from "./pages/Limitada";
import Sobre from "./pages/Sobre";
import "../src/global.css";

const App = () => {
  return (
    <div className="layout">
      <SidebarBoot />
      <div className="page-content">
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
};

export default App;
