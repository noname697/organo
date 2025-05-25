import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [funcao, setFuncao] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoAgenteCadastrado({
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
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Genêro"
          placeholder="Digite seu genêro"
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <CampoTexto
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
    </section>
  );
};

export default Formulario;
