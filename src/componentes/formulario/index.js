import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const funcoes = ["Duelista", "Iniciador", "Controlador", "Suporte"];

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Agente.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Genêro"
          placeholder="Digite seu genêro"
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Função" itens={funcoes} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
