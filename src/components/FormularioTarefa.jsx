import { useState } from "react";
import { Formulario, CampoTexto, BotaoAdicionar } from "../styles/components/Tarefa.styles";

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (texto.trim() === "") {
      alert("Digite uma tarefa.");
      return;
    }

    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <Formulario onSubmit={enviarFormulario}>
      <CampoTexto
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />

      <BotaoAdicionar type="submit">Adicionar</BotaoAdicionar>
    </Formulario>
  );
}

export default FormularioTarefa;
