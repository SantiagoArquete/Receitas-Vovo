// Receitas.jsx
import React, { useState } from 'react';

const Receitas = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para controlar o colapso

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Alterna entre aberto e fechado
  };

  return (
    <div>
      <h1 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        Receitas {isCollapsed ? '▲' : '▼'}
      </h1>
      {isCollapsed && (
        <div>
          <ul>
            <li>
              <a href="/receitas/doces">Doces</a>
            </li>
            <li>
              <a href="/receitas/salgadas">Salgadas</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Receitas;