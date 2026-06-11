import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CampoTexto = styled.input`
  flex: 1;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.primaria};
  border-radius: 8px;
  outline: none;
`;

export const BotaoAdicionar = styled.button`
  background-color: ${({ theme }) => theme.primaria};
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ItemTarefa = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextoTarefa = styled.span`
  flex: 1;
  text-decoration: ${({ concluida }) => (concluida ? "line-through" : "none")};
  opacity: ${({ concluida }) => (concluida ? 0.6 : 1)};
`;

export const BotaoRemover = styled.button`
  background-color: ${({ theme }) => theme.perigo};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerFiltros = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
`;

export const BotaoFiltro = styled.button`
  background-color: ${({ ativo, theme }) =>
    ativo ? theme.primaria : theme.secundaria};

  color: ${({ ativo }) => (ativo ? "white" : "inherit")};
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
