// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Alterado para 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

// Criação da raiz (root) do React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>,
);
