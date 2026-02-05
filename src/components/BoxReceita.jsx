import { Box, BoxInto } from "../components/DefaultFunctions";
import { InlineStep } from "../components/InlineStep";

export default function BoxReceita({ receita }) {
  return (
    <Box
      title={`${receita.nome_receita} - Serve ${receita.rendimento} pessoa${
        receita.rendimento > 1 ? "s" : ""
      }`}
      className={"shadow"}
    >
      {/* INGREDIENTES */}
      <div>
        <div className="headerBox">
          <h2>
            <strong>Ingredientes:</strong>
          </h2>
        </div>

        <div className="ingredientesBox">
          {receita.ingredientes?.length > 0 ? (
            receita.ingredientes.map((item, index) => (
              <p key={index}>• {item.ingrediente}</p>
            ))
          ) : (
            <p>Sem ingredientes cadastrados</p>
          )}
        </div>
      </div>

      {/* MODO DE PREPARO */}
      <div style={{ paddingTop: "20px" }}>
        <div className="headerBox">
          <h2>
            <strong>Modo de Preparo:</strong>
          </h2>
        </div>

        <div>
          {receita.modopreparo?.length > 0 ? (
            <>
              {receita.modopreparo.map((item, index) => (
                <p key={index}>
                  <InlineStep stepNumber={item.numeroPasso} />
                  {item.passo}
                </p>
              ))}

              {/* Passo final */}
              <p>
                <InlineStep stepNumber={receita.modopreparo.length + 1} />
                Seu <strong>{receita.nome_receita}</strong> está pronto para ser
                servido e deliciado !!
              </p>
            </>
          ) : (
            <p>Sem passo a passo cadastrado</p>
          )}
        </div>
      </div>

      {/* SUGESTÃO */}
      <BoxInto title="Sugestões da Receita">
        <p>{receita.sujestao}</p>
      </BoxInto>
    </Box>
  );
}
