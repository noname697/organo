import Agente from "../Agente";
import "./Funcao.css";

const Funcao = (props) => {
  return (
    <section
      className="funcao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <Agente />
      <Agente />
    </section>
  );
};

export default Funcao;
