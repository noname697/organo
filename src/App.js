import { useState } from "react";
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

  const agentesIniciais = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Lucas",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Marina",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Iniciador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Rafaela",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Controlador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "João",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Sentinela",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Isabela",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Fernando",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Iniciador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Bianca",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Controlador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Carlos",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Juliana",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Sentinela",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "André",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Controlador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Camila",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Iniciador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Pedro",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Fernanda",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Sentinela",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Thiago",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Iniciador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Patrícia",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Controlador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Eduardo",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Sentinela",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Larissa",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Bruno",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Controlador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Vanessa",
      genero: "Feminino",
      imagem: "https://github.com/noname697.png",
      funcao: "Iniciador",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Ricardo",
      genero: "Masculino",
      imagem: "https://github.com/noname697.png",
      funcao: "Duelista",
    },
  ];

  const [agentes, setAgentes] = useState(agentesIniciais);

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
