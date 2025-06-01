import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Funcao from "./componentes/Funcao";
import Footer from "./componentes/Footer";

function App() {
  const [funcoes, setFuncoes] = useState([
    {
      nome: "Duelista",
      corPrimaria: "#F54D41",
      corSecundaria: "#F7948D",
    },
    {
      nome: "Iniciador",
      corPrimaria: "#F2D43D",
      corSecundaria: "#F2EEB6",
    },
    {
      nome: "Controlador",
      corPrimaria: "#3D9DD9",
      corSecundaria: "#BBE8F2",
    },
    {
      nome: "Sentinela",
      corPrimaria: "#6CA907",
      corSecundaria: "#B6F25C",
    },
  ]);

  const [agentes, setAgentes] = useState([]);

  const aoNovoAgenteAdicionado = (agente) => {
    setAgentes([...agentes, agente]);
  };

  const deletarAgente = () => {
    console.log("Deletar agente");
  };

  const mudarCorDaFuncao = (cor, nome) => {
    setFuncoes(
      funcoes.map((funcao) => {
        if (funcao.nome === nome) {
          funcao.corPrimaria = cor;
        }
        return funcao;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={funcoes.map((funcao) => funcao.nome)}
        aoAgenteCadastrado={(agente) => aoNovoAgenteAdicionado(agente)}
      />
      {funcoes.map((funcao) => (
        <Funcao
          mudarCor={mudarCorDaFuncao}
          key={funcao.nome}
          nome={funcao.nome}
          corPrimaria={funcao.corPrimaria}
          corSecundaria={funcao.corSecundaria}
          agentes={agentes.filter(
            (colaborador) => colaborador.funcao === funcao.nome
          )}
          aoDeletar={deletarAgente}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
