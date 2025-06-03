import Agente from "../Agente";
import "./Funcao.css";
import hexToRgba from "hex-to-rgba";

const Funcao = ({
  id,
  nome,
  corPrimaria,
  cor,
  agentes,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}) => {
  return agentes.length > 0 ? (
    <section
      className="funcao"
      style={{ backgroundColor: hexToRgba(cor, 0.6) }}
    >
      <input
        onChange={(e) => mudarCor(e.target.value, id)}
        value={cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="agentes">
        {agentes.map((agente) => {
          return (
            <Agente
              corDeFundo={cor}
              agente={agente}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Funcao;
