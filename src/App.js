import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Funcao from "./componentes/Funcao";
import Footer from "./componentes/Footer";
import BotaoEsconder from "./componentes/BotaoEsconder";
import { v4 as uuidv4 } from "uuid";

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
  
  const [agentes, setAgentes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/agentes')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setAgentes(dados);
      })
  }, []) 

  const aoNovoAgenteAdicionado = (agente) => {
    setAgentes([...agentes, agente]);
  };

  const deletarAgente = (id) => {
    setAgentes(agentes.filter((agente) => agente.id !== id));
  };

  const mudarCorDaFuncao = (cor, id) => {
    setFuncoes(
      funcoes.map((funcao) => {
        if (funcao.id === id) {
          funcao.cor = cor;
        }
        return funcao;
      })
    );
  };

  const cadastrarFuncao = (novaFuncao) => {
    setFuncoes([...funcoes, { ...novaFuncao, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    setAgentes(
      agentes.map((agente) => {
        if (agente.id === id) agente.favorito = !agente.favorito;
        return agente;
      })
    );
  };

  const [formularioVisivel, setFormularioVisivel] = useState(true);

  const esconderFormulario = () => {
setFormularioVisivel(!formularioVisivel)
  }

  return (
    <div className="App">
      <Banner />
      {formularioVisivel ? (
      <Formulario
        cadastrarFuncao={cadastrarFuncao}
        funcoes={funcoes.map((funcao) => funcao.nome)}
        aoAgenteCadastrado={(agente) => aoNovoAgenteAdicionado(agente)}
      />
      ): ''}

      <BotaoEsconder esconderFormulario={esconderFormulario}/>
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
