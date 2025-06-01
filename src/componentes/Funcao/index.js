import Agente from "../Agente";
import "./Funcao.css";

const Funcao = ({
  nome,
  corPrimaria,
  corSecundaria,
  agentes,
  aoDeletar,
  mudarCor,
}) => {
  return agentes.length > 0 ? (
    <section className="funcao" style={{ backgroundColor: corSecundaria }}>
      <input
        onChange={(e) => mudarCor(e.target.value, nome)}
        value={corSecundaria}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="agentes">
        {agentes.map((agente) => {
          return (
            <Agente
              corDeFundo={corPrimaria}
              key={agente.nome}
              nome={agente.nome}
              funcao={agente.funcao}
              imagem={agente.imagem}
              aoDeletar={aoDeletar}
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
