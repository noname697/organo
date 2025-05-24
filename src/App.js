import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  const [agentes, setAgentes] = useState([])

  const aoNovoAgenteAdicionado = (agente) => {
    console.log(agente)
    setAgentes([...agentes, agente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoAgenteCadastrado={agente => aoNovoAgenteAdicionado(agente)}/>
    </div>
  );
}

export default App;
