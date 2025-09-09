import React from "react";
import { Box, PageTemplate } from "../components/DefaultFunctions";

function PaginaInicial() {
  return (
    <PageTemplate
      title="Bem-vindo ao meu site!"
      header="Receitas da Vovó - Pagina Inicial"
      footer="© Copyright 2024-2025 Santiago Developer LTDA & BS - Brazilian Software"
    >
      <p1>Desde de quando comecei a aprender programação, meu sonho foi fazer um site que eu poderia usar 
      dia a dia e juntasse coisas que eu gosto de fazer. Como resultado disso, pensei em fazer um site onde 
      eu pudesse colocar todas as receitas que gosto para que todos da minha família usassem <strong>sem moderação.</strong></p1><br/><br/>

      <p1>Então nesse site tem todas as receitas que eu gosto, receitas que já fiz que ficaram uma delícia e 
      receitas que ainda poderiam ser feitas e testadas por mim ou por você ai.</p1><br/><br/>
      
      <p1>Para descobrir as receitas, basta clicar no menu ao lado, na opção <strong>"Receitas"</strong>, 
      e navegar nas opções que quiserem. Preparem a barriga 😁.</p1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <p1>Quero agradecer primeiramente ao meu querido primo Marx por me direcionar para aréa, minha família 
      que sempre me apoiou nas minha decisões e sempre confiou na minha capacidade, minha namorada perfeita que 
      sempre me apoiou nos meus estudos e me incentivou a evoluir sempre. Ao meu chefe André que meu deu minha 
      primeira oportunidade de emprego na área que me aprimorou e continua a me aprimorar sempre e a todos os 
      outros que fizeram parte da minha caminhada que está só no começo</p1><br/><br/>
    </PageTemplate>
  );
}

export default PaginaInicial;
