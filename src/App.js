import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Funcao from "./componentes/Funcao";

function App() {
  const [agentes, setAgentes] = useState([]);

  const aoNovoAgenteAdicionado = (agente) => {
    console.log(agente);
    setAgentes([...agentes, agente]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoAgenteCadastrado={(agente) => aoNovoAgenteAdicionado(agente)}
      />
      <Funcao nome="Duelistas"/>
      <Funcao nome="Iniciadores"/>
      <Funcao nome="Controladores"/>
      <Funcao nome="Sentinelas"/>
    </div>
  );
}

export default App;
