import "./Agente.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Agente = ({ corDeFundo, aoDeletar, agente, aoFavoritar }) => {

  const favoritar = () => {
    aoFavoritar(agente.id);
  }

  const propsFavorito={
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="agente">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(agente.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={agente.imagem} alt="Arthur Manenti" />
      </div>
      <div className="rodape">
        <h4>{agente.nome}</h4>
        <h5>{agente.funcao}</h5>
        <div className="favorito"></div>
        {agente.favorito ? <AiFillHeart {...propsFavorito} color="#FF0000"/> : <AiOutlineHeart {...propsFavorito} />}
      </div>
    </div>
  );
};

export default Agente;
