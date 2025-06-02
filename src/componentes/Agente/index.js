import "./Agente.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Agente = ({corDeFundo, aoDeletar, agente}) => {
  return (
    <div className="agente">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(agente.id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={agente.imagem} alt="Arthur Manenti" />
      </div>
      <div className="rodape">
        <h4>{agente.nome}</h4>
        <h5>{agente.funcao}</h5>
      </div>
    </div>
  );
};

export default Agente;
