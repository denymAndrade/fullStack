const BemVindo = ({ nomeUsuario, totalHabitos }) => {
  const nomeFormatado = nomeUsuario.toUpperCase();

  const mensagem =
    totalHabitos > 0
      ? "Você tem ${totalHabitos} hábitos Cadastrados"
      : "Nenhum hábito cadastrado ainda. Que tal Começar";

  return (
    <div>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{totalHabitos} Cadastrados</p>
    </div>
  );
};
export default BemVindo;
