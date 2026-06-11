import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import FormularioTarefa from "./components/FormularioTarefa";
import TarefaItem from "./components/TarefaItem";
import Filtros from "./components/Filtros";

import GlobalStyle from "./styles/GlobalStyle";
import { temaClaro, temaEscuro } from "./styles/themes";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [temaEscuroAtivo, setTemaEscuroAtivo] = useState(false);

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "ativas") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <ThemeProvider theme={temaEscuroAtivo ? temaEscuro : temaClaro}>
      <GlobalStyle />

      <Header
        temaEscuroAtivo={temaEscuroAtivo}
        alterarTema={() => setTemaEscuroAtivo(!temaEscuroAtivo)}
      />

      <main>
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />

        <Filtros filtro={filtro} setFiltro={setFiltro} />

        {tarefasFiltradas.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          tarefasFiltradas.map((tarefa) => (
            <TarefaItem
              key={tarefa.id}
              tarefa={tarefa}
              alternarConclusao={alternarConclusao}
              removerTarefa={removerTarefa}
            />
          ))
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
