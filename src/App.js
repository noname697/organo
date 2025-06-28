import { useEffect, useReducer, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Funcao from "./componentes/Funcao";
import Footer from "./componentes/Footer";
import BotaoEsconder from "./componentes/BotaoEsconder";
import { v4 as uuidv4 } from "uuid";
import reducer from "./reducer";

function App() {
  const [funcoes, setFuncoes] = useState([
    {
      id: uuidv4(),
      nome: "Duelista",
      cor: "#F7948D",
    },
    {
      id: uuidv4(),
      nome: "Iniciador",
      cor: "#F2EEB6",
    },
    {
      id: uuidv4(),
      nome: "Controlador",
      cor: "#BBE8F2",
    },
    {
      id: uuidv4(),
      nome: "Sentinela",
      cor: "#B6F25C",
    },
  ]);

  const [agentes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("http://localhost:8080/agentes")
      .then((resposta) => resposta.json())
      .then((dados) => {
        dispatch({
          tipo: "CARREGAR_AGENTES",
          agentes: dados,
        });
      });
  }, []);

  const aoNovoAgenteAdicionado = (agente) => {
    dispatch({
      tipo: "ADICIONAR_AGENTE",
      agente: agente,
    });
  };

  const deletarAgente = (id) => {
    dispatch({
      tipo: "DELETAR_AGENTE",
      id: id,
    });
  };

  const mudarCorDaFuncao = (cor, id) => {
    setFuncoes(
      funcoes.map((funcao) => {
        if (funcao.id === id) {
          return { ...funcao, cor };
        }
        return funcao;
      })
    );
  };

  const cadastrarFuncao = (novaFuncao) => {
    setFuncoes([...funcoes, { ...novaFuncao, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    dispatch({
      tipo: "RESOLVER_FAVORITO",
      id: id,
    });
  };

  const [formularioVisivel, setFormularioVisivel] = useState(true);

  const esconderFormulario = () => {
    setFormularioVisivel(!formularioVisivel);
  };

  return (
    <div className="App">
      <Banner />
      {formularioVisivel && (
        <Formulario
          cadastrarFuncao={cadastrarFuncao}
          funcoes={funcoes.map((funcao) => funcao.nome)}
          aoAgenteCadastrado={aoNovoAgenteAdicionado}
        />
      )}

      <BotaoEsconder esconderFormulario={esconderFormulario} />

      {funcoes.map((funcao) => (
        <Funcao
          id={funcao.id}
          mudarCor={mudarCorDaFuncao}
          key={funcao.nome}
          nome={funcao.nome}
          corPrimaria={funcao.corPrimaria}
          cor={funcao.cor}
          agentes={agentes.filter((agente) => agente.funcao === funcao.nome)}
          aoDeletar={deletarAgente}
          aoFavoritar={resolverFavorito}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
