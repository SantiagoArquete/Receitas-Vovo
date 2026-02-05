import React from "react";
import { Box, PageTemplate } from "../components/DefaultFunctions";

function Sobre() {
  return (
    <PageTemplate
      title="Sobre meu site"
      header="Receitas da Vovó - Sobre"
      footer="© Copyright 2024-2025 Santiago Developer LTDA & BS - Brazilian Software"
    >
      <p>Esse site foi criado para que eu possa colocar meu conhecimentos de programação em prática e que eu 
      possa desenvolver em cima deste site. Ainda terão mais modificações e melhorias de ações que poderiam ser 
      feitas pelos usuários deste site.</p><br/><br/>

      <p>Criarei uma área para que possa ser colocado dicas e sugestões de melhorias para que você possa 
      auxiliar na evolução do site.</p>
      
    </PageTemplate>
  );
}

export default Sobre;
