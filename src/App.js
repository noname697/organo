import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Funcao from "./componentes/Funcao";
import Footer from "./componentes/Footer";

function App() {
  const funcoes = [
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
  ];

  const [agentes, setAgentes] = useState([]);

  const aoNovoAgenteAdicionado = (agente) => {
    console.log(agente);
    setAgentes([...agentes, agente]);
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
          key={funcao.nome}
          nome={funcao.nome}
          corPrimaria={funcao.corPrimaria}
          corSecundaria={funcao.corSecundaria}
          agentes={agentes.filter(colaborador => colaborador.funcao === funcao.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
