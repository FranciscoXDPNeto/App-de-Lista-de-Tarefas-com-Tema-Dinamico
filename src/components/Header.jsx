import { ContainerHeader, BotaoTema } from "../styles/components/Header.styles";

function Header({ temaEscuroAtivo, alterarTema }) {
  return (
    <ContainerHeader>
      <h1>Lista de Tarefas</h1>

      <BotaoTema onClick={alterarTema}>
        {temaEscuroAtivo ? "Tema Claro" : "Tema Escuro"}
      </BotaoTema>
    </ContainerHeader>
  );
}

export default Header;
