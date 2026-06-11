import { ContainerFiltros, BotaoFiltro } from "../styles/components/Tarefa.styles";

function Filtros({ filtro, setFiltro }) {
  return (
    <ContainerFiltros>
      <BotaoFiltro
        ativo={filtro === "todas"}
        onClick={() => setFiltro("todas")}
      >
        Todas
      </BotaoFiltro>

      <BotaoFiltro
        ativo={filtro === "ativas"}
        onClick={() => setFiltro("ativas")}
      >
        Ativas
      </BotaoFiltro>

      <BotaoFiltro
        ativo={filtro === "concluidas"}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas
      </BotaoFiltro>
    </ContainerFiltros>
  );
}

export default Filtros;
