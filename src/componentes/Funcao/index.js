import Agente from "../Agente";
import "./Funcao.css";

const Funcao = (props) => {
  return (
    <section
      className="funcao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="agentes">
      {props.agentes.map(agente => <Agente key={agente.nome} nome={agente.nome} funcao={agente.funcao} imagem={agente.imagem}/>)}
      </div>
    </section>
  );
};

export default Funcao;
