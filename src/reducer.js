const reducer = (estado, acao) => {
  switch (acao.tipo) {
    case "CARREGAR_AGENTES":
      return acao.agentes;

    case "ADICIONAR_AGENTE":
      const { nome, genero, imagem, funcao } = acao.agente;

      if (!nome || nome.length < 3) {
        alert("O nome do agente deve ter pelo menos 3 caracteres.");
        return estado;
      }
      if (nome.length > 20) {
        alert("O nome do agente deve ter no máximo 20 caracteres.");
        return estado;
      }
      if (!genero || genero.length > 20) {
        alert("O gênero do agente deve ter no máximo 20 caracteres.");
        return estado;
      }
      if (
        !imagem ||
        (!imagem.endsWith(".png") &&
          !imagem.endsWith(".jpg") &&
          !imagem.endsWith(".jpeg"))
      ) {
        alert(
          "A imagem do agente deve ser uma URL válida terminando com .png, .jpg ou .jpeg."
        );
        return estado;
      }

      return [
        ...estado,
        {
          id: crypto.randomUUID(),
          nome,
          genero,
          imagem,
          funcao,
          favorito: false,
        },
      ];

    case "DELETAR_AGENTE":
      return estado.filter((agente) => agente.id !== acao.id);

    case "RESOLVER_FAVORITO":
      return estado.map((agente) =>
        agente.id === acao.id
          ? { ...agente, favorito: !agente.favorito }
          : agente
      );

    default:
      return estado;
  }
};

export default reducer;
