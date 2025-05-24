import './Funcao.css'

const Funcao = (props) => {
    return(
        <section className='funcao' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
};

export default Funcao;
