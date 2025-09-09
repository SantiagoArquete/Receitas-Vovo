// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Alterado para 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Criação da raiz (root) do React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
