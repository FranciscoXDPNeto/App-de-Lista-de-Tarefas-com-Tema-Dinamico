import {
  ItemTarefa,
  TextoTarefa,
  BotaoRemover,
} from "../styles/components/Tarefa.styles";

function TarefaItem({ tarefa, alternarConclusao, removerTarefa }) {
  return (
    <ItemTarefa>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarConclusao(tarefa.id)}
      />

      <TextoTarefa concluida={tarefa.concluida}>
        {tarefa.texto}
      </TextoTarefa>

      <BotaoRemover onClick={() => removerTarefa(tarefa.id)}>
        Remover
      </BotaoRemover>
    </ItemTarefa>
  );
}

export default TarefaItem;
