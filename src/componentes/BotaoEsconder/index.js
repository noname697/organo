import { BiAddToQueue } from "react-icons/bi";
import "./BotaoEsconder.css";

const BotaoEsconder = ({esconderFormulario}) => {
  return (
    <div className="botao-esconder-container">
      <BiAddToQueue size={50} className="botao-esconder" onClick={esconderFormulario}/>
    </div>
  );
};

export default BotaoEsconder;
