import "./Agente.css"

const Agente = ({nome, imagem, funcao, corDeFundo}) => {
    return (
        <div className="agente">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt="Arthur Manenti"/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default Agente