import Agente from "../Agente";
import "./Funcao.css";

const Funcao = (props) => {
  return props.agentes.length > 0 ? (
    <section
      className="funcao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="agentes">
        {props.agentes.map((agente) => (
          <Agente
          corDeFundo={props.corPrimaria}
            key={agente.nome}
            nome={agente.nome}
            funcao={agente.funcao}
            imagem={agente.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Funcao;
