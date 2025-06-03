import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [funcao, setFuncao] = useState("");
  const [nomeFuncao, setNomeFuncao] = useState("");
  const [corFuncao, setCorFuncao] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoAgenteCadastrado({
      id: uuidv4(),
      nome: nome,
      genero: genero,
      imagem: imagem,
      funcao: funcao,
    });
    setNome("");
    setGenero("");
    setImagem("");
    setFuncao("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Agente.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Genêro"
          placeholder="Digite seu genêro"
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <Campo
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Função"
          itens={props.funcoes}
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.cadastrarFuncao({ nome: nomeFuncao, cor: corFuncao });
          setNomeFuncao("");
        }}
      >
        <h2>Preencha os dados para criar uma nova função.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome da função"
          valor={nomeFuncao}
          aoAlterado={(valor) => setNomeFuncao(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor da função"
          valor={corFuncao}
          aoAlterado={(valor) => setCorFuncao(valor)}
        />
        <Botao>Criar uma nova função</Botao>
      </form>
    </section>
  );
};

export default Formulario;
