import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isReceitasCollapsed, setIsReceitasCollapsed] = useState(false); // Estado para controlar o colapso

  const toggleReceitasCollapse = () => {
    setIsReceitasCollapsed(!isReceitasCollapsed); // Alterna entre aberto e fechado
  };

  const activeClassName = ({ isActive }) => (isActive ? "active" : "");

  return (
    <div className="sidebar z-9999">
      <div className="sidebar-logo">
        <img src="/favicon.ico" alt="Logo" />
      </div>

      <NavLink to="/paginainicial" className={activeClassName}>
        Página Inicial
      </NavLink>

      <div className="sidebar-collapsible">
        <div onClick={toggleReceitasCollapse} style={{ cursor: "pointer" }}>
          Receitas {isReceitasCollapsed ? "▲" : "▼"}
        </div>

        {isReceitasCollapsed && (
          <div className="sidebar-subitems">
            <NavLink to="/receitas/doces" className={activeClassName}>
              Doces
            </NavLink>
            <NavLink to="/receitas/salgadas" className={activeClassName}>
              Salgadas
            </NavLink>
            <NavLink to="/receitas/Limitada" className={activeClassName}>
              Edição Especial
            </NavLink>
          </div>
        )}
      </div>

      <NavLink to="/sobre" className={activeClassName}>
        Sobre
      </NavLink>
    </div>
  );
}

export default Sidebar;