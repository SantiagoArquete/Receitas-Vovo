import React from "react";
import { Box, PageTemplate, BoxInto } from "../components/DefaultFunctions";
import { InlineStep } from "../components/InlineStep";
import { useEffect, useState } from "react";
import api from "../service/api";

function PaginaInicial() {
  const [idUsuario, setIdUsuario] = useState([]);
  const [dataNasc, setDataNas] = useState([]);
  const [email, setEmail] = useState([]);
  const [celular, setCelular] = useState([]);

  const [idReceita, setIdReceita] = useState([]);
  const [nome, setNome] = useState([]);
  const [rendimento, setRendimento] = useState([]);
  const [sujestao, setSujestao] = useState([]);

  const [ingrediente, setIngrediente] = useState([]);

  useEffect(() => {
    api
      .get("/receitas")
      .then((response) => {
        setNome(response.data[0].nome);
        setIdUsuario(response.data[0].id_usuario);
        setDataNas(response.data[0].data_nasc.split("T")[0]);
        setCelular(response.data[0].celular);
        setEmail(response.data[0].email);
      })
      .catch((err) => console.error(err));

    api
      .get("/receitas")
      .then((response) => {
        setIdReceita(response.data[0].id_receita);
        setNome(response.data[0].nome);
        setRendimento(response.data[0].rendimento);
        setSujestao(response.data[0].sujestao);
      })
      .catch((err) => console.error(err));

    api
      .get(`/ingredientes/${idReceita}`)
      .then((response) => {
        setIngrediente(response.data[0].ingrediente);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageTemplate
      title="Salgados"
      header="Receitas da Vovó - Pagina Inicial"
      footer="© Copyright 2024-2025 Santiago Developer LTDA & BS - Brazilian Software"
    >
      <Box title={`${nome} - Serve ${rendimento} pessoa`}>
        <div className="headerBox">
          <h2>
            <strong>Ingredientes:</strong>
          </h2>
        </div>
        <div className="ingredientesBox">
          {ingrediente.map((item, index) => (
            <p key={index}>{item.ingrediente}</p>
          ))}
        </div>

        <div className="headerBox">
          <h2>
            <strong>Modo de Preparo:</strong>
          </h2>
        </div>
        <p>
          <InlineStep stepNumber={1} /> Frite o bacon em uma panela e reserve
          para usar depois
        </p>
        <p>
          <InlineStep stepNumber={2} /> Misture os ovos com o sal, cebolinha e
          páprica e coloque em uma panela com manteiga
        </p>
        <p>
          <InlineStep stepNumber={3} /> Coloque o bacon frito no meio do omelet
          e deixe cozinhar
        </p>
        <p>
          <InlineStep stepNumber={4} /> Após fazer esse processo, coloque a
          mussarela e deixe derreter
        </p>
        <p>
          <InlineStep stepNumber={5} /> Seu{" "}
          <strong>Omelet Caseiro da Casa</strong> está pronto para ser servido
          !!
        </p>
        <br />
        <BoxInto title="Sujestões da Receita">
          <p>{sujestao}</p>
        </BoxInto>
      </Box>

      <Box title="Frango com Molho Branco - Serve 2 pessoa">
        <p2>
          <strong>Ingredientes:</strong>
        </p2>
        <br />
        <br />
        <p>2 Pedaços de peito de frango</p>
        <p>Mussarela</p>
        <p>Leite</p>
        <p>1 Cebola</p>
        <p>4 Cabeças de alho </p>
        <p>Têmpero a gosto</p>
        <br />

        <p2>
          <strong>Modo de Preparo:</strong>
        </p2>
        <br />
        <br />
        <p>
          <InlineStep stepNumber={1} /> Deixe o frango grelhar inteiro ou picado
          em um panela com manteiga e deixe reservado
        </p>
        <p>
          <InlineStep stepNumber={2} /> Para fazer o molho branco, pique a
          cebola e o alho bem pequeno e frite em uma pabela com manteiga
        </p>
        <p>
          <InlineStep stepNumber={3} /> Assim que tiver frito, coloque 1 colher
          de farinha e misture bem para não queimar, quando tostar um pouco,
          coloque o leite de pouco em pouco enquanto mexa até a testura ficar
          cremosa
        </p>
        <p>
          <InlineStep stepNumber={4} /> Quando o molho ficar pronto, coloque o
          frango dentro do molho e misture junto com a mussarela
        </p>
        <p>
          <InlineStep stepNumber={5} /> Seu{" "}
          <strong>Frango com Molho Branco</strong> está pronto para ser servido
          e deliciado !!
        </p>
        <br />
        <BoxInto title="Sujestões da Receita">
          <p>
            Não há necessidade de comer mais nada além dessa delícia em forma de
            comida, apenas coma em uma sabado a noite, sem refrierante, por
            favor.
          </p>
        </BoxInto>
      </Box>

      <Box title="Batata com Molho - Serve 2 pessoa">
        <p2>
          <strong>Ingredientes:</strong>
        </p2>
        <br />
        <br />
        <p>Batata frita</p>
        <p>Frango desfiado</p>
        <p>Bacon picado</p>
        <p>1 caixa de creme de leite</p>
        <p>Cheddar</p>
        <p>Mussarela</p>
        <br />

        <p2>
          <strong>Modo de Preparo:</strong>
        </p2>
        <br />
        <br />
        <p>
          <InlineStep stepNumber={1} /> Em uma panela frite a batata, em outra
          cozinhe o frango desfiado e comece a fazer o molho
        </p>
        <p>
          <InlineStep stepNumber={2} /> Coloque em uma panela o creme de leite e
          o cheddar para que forma um molho de chegar, assim que virar um creme,
          desligue o fogo e coloque a mussarela para derreter{" "}
        </p>
        <p>
          <InlineStep stepNumber={3} /> Para montar, coloque a batata em uma
          travessa, jogue o frango desfiado e por fim, o creme de queijo
        </p>
        <p>
          <InlineStep stepNumber={4} /> Sua <strong>Batata com Molho</strong>{" "}
          está pronta para ser servido e deliciado !!
        </p>
        <br />
        <BoxInto title="Sujestões da Receita">
          <p>
            Essa receita é ótima para comer em um sábado de tarde quando a fome
            bater e não tiver com muito dinheiro, pois os ingredientes são bem
            tranquilos de ter em casa.
          </p>
        </BoxInto>
      </Box>

      <Box title="Macarronada com Molho Branco: - Serve 2 pessoa">
        <p2>
          <strong>Ingredientes:</strong>
        </p2>
        <br />
        <br />
        <p>Macarrão espaguete</p>
        <p>Cebola</p>
        <p>Alho</p>
        <p>Farinha de trigo</p>
        <p>Leite</p>
        <p>Sal a gosto</p>
        <p>Cebolinha</p>
        <p>Mussarela</p>
        <br />

        <p2>
          <strong>Modo de Preparo:</strong>
        </p2>
        <br />
        <br />
        <p>
          <InlineStep stepNumber={1} /> Inicie cozinhando o macarrão e reserve
          para depois
        </p>
        <p>
          <InlineStep stepNumber={2} /> Para fazer o molho branco, pique a
          cebola e o alho bem pequeno e frite em uma pabela com manteiga
        </p>
        <p>
          <InlineStep stepNumber={3} /> Assim que tiver frito, coloque 1 colher
          de farinha e misture bem para não queimar, quando tostar um pouco,
          coloque o leite de pouco em pouco enquanto mexa até a testura ficar
          cremosa
        </p>
        <p>
          <InlineStep stepNumber={3} /> Depois que o molho ficar pronto, coloque
          o macarrão dentro do molho e misture junto com as cebolinhas picadas.
        </p>
        <p>
          <InlineStep stepNumber={4} /> Sua{" "}
          <strong>Macarronada com Molho Branco</strong> está pronta para ser
          servido e deliciado !!
        </p>
        <br />
        <BoxInto title="Sujestões da Receita">
          <p>
            Para você que gosta de comer algo mais leve, essa receita é otima,
            além de gostosa e deliciosa e a cebolinha é o toque final, não
            esqueça.
          </p>
        </BoxInto>
      </Box>

      <Box title="Pão com Cebola e Alho - Serve 2 pessoas">
        <p2>
          <strong>Ingredientes:</strong>
        </p2>
        <br />
        <br />
        <p>Pão</p>
        <p>Frango</p>
        <p>Cebola</p>
        <p>Alho</p>
        <p>Manteiga</p>
        <p>Mussarela</p>
        <p>Shoyu</p>
        <br />

        <p2>
          <strong>Modo de Preparo:</strong>
        </p2>
        <br />
        <br />
        <p>
          <InlineStep stepNumber={1} /> Comece preparando o frango (cozido ou
          grelhado) e desfie ou corte em pedaços pequenos
        </p>
        <p>
          <InlineStep stepNumber={2} /> Em uma panela, derreta a manteiga e
          refogue a cebola e o alho picados até ficarem dourados
        </p>
        <p>
          <InlineStep stepNumber={3} /> Adicione o frango preparado e tempere
          com shoyu a gosto, misturando bem
        </p>
        <p>
          <InlineStep stepNumber={4} /> Corte o pão ao meio e coloque a mistura
          de frango com cebola e alho
        </p>
        <p>
          <InlineStep stepNumber={5} /> Cubra com mussarela e leve ao forno ou
          airfryer até derreter o queijo
        </p>
        <p>
          <InlineStep stepNumber={6} /> Seu{" "}
          <strong>Pão com Cebola e Alho</strong> está pronto para ser servido e
          aproveitado!
        </p>
        <br />

        <BoxInto title="Sugestões da Receita">
          <p>
            Esta receita é perfeita para um lanche rápido e saboroso. A
            combinação do frango com o shoyu e o queijo derretido dá um toque
            especial. Você pode adicionar outros temperos a gosto.
          </p>
        </BoxInto>
      </Box>

      <Box title="Arroz Temperado ( Frango ou Famarão ) - Serve 2 pessoa">
        <p2>
          <strong>Ingredientes:</strong>
        </p2>
        <br />
        <br />
        <p>Arroz</p>
        <p>2 peitos de frango</p>
        <p>Bacon picado</p>
        <p>2 cebolas</p>
        <p>1 tomate</p>
        <p>Molho de tomate</p>
        <p>Têmpero a gosto</p>
        <br />

        <p2>
          <strong>Modo de Preparo:</strong>
        </p2>
        <br />
        <br />
        <p>
          <InlineStep stepNumber={1} /> Deixe o frango grelhar inteiro ou picado
          em um panela com manteiga e deixe reservado
        </p>
        <p>
          <InlineStep stepNumber={2} /> Para fazer o molho branco, pique a
          cebola e o alho bem pequeno e frite em uma pabela com manteiga
        </p>
        <p>
          <InlineStep stepNumber={3} /> Assim que tiver frito, coloque 1 colher
          de farinha e misture bem para não queimar, quando tostar um pouco,
          coloque o leite de pouco em pouco enquanto mexa até a testura ficar
          cremosa
        </p>
        <p>
          <InlineStep stepNumber={4} /> Quando o molho ficar pronto, coloque o
          frango dentro do molho e misture junto com a mussarela
        </p>
        <p>
          <InlineStep stepNumber={5} /> Seu{" "}
          <strong>Frango com Molho Branco</strong> esta pronto para ser servido
          e deliciado !!
        </p>
        <br />
        <BoxInto title="Sujestões da Receita">
          <p>
            Não há necessidade de comer mais nada além dessa delícia em forma de
            comida, apenas coma em uma sabado a noite, sem refrierante, por
            favor.
          </p>
        </BoxInto>
      </Box>
    </PageTemplate>
  );
}

export default PaginaInicial;
