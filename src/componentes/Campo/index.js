import "./Campo.css";

const Campo = ({
  type = "text",
  aoAlterado,
  label,
  valor,
  obrigatorio = false,
  placeholder,
}) => {
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={`${placeholder}...`}
      />
    </div>
  );
};

export default Campo;
