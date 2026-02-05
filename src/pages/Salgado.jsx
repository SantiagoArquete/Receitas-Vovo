import React from "react";
import { Box, PageTemplate, BoxInto } from "../components/DefaultFunctions";
import { InlineStep } from "../components/InlineStep";
import BoxReceita from "../components/BoxReceita";
import { useEffect, useState } from "react";
import api from "../service/api";

function PaginaInicial() {
  const [receitas, setReceitas] = useState([]);
  const [receitasMap, setReceitasMap] = useState([]);

  useEffect(() => {
    if (receitas) {
      const receitasTratadas = receitas.map((rec) => ({
        ...rec,
        ingredientes:
          rec.ingredientes?.map((item) => ({
            ingrediente: item.ingrediente || "",
          })) || [],
        modopreparo:
          rec.modopreparo?.map((item) => ({
            numeroPasso: item.numeroPasso,
            passo: item.passo || "",
          })) || [],
      }));

      setReceitasMap(receitasTratadas);
    }
  }, [receitas]);

  useEffect(() => {
    api
      .get("/receitasCompleta")
      .then((response) => {
        setReceitas(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageTemplate
      title="Salgados"
      header="Receitas da Vovó - Pagina Inicial"
      footer="© Copyright 2024-2025 Santiago Developer LTDA & BS - Brazilian Software"
    >
      {receitasMap.map((receita, index) => (
        <BoxReceita key={index} receita={receita} />
      ))}
    </PageTemplate>
  );
}

export default PaginaInicial;
