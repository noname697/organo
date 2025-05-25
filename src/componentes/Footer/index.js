import "./Footer.css";

const Footer = () => {
  const redesSociais = [
    "/imagens/fb.png",
    "/imagens/ig.png",
    "/imagens/tw.png",
  ];
  return (
    <footer className="rodape">
      <ul>
        {redesSociais.map((redeSocial) => (
          <li key={redeSocial}>
            <img src={redeSocial} alt={redeSocial} />
          </li>
        ))}
      </ul>
      <img src="/imagens/logo.png" alt="logo" />
      <h3>Desenvolvido por Arthur Manenti</h3>
    </footer>
  );
};

export default Footer;
