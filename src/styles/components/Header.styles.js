import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.texto};
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const BotaoTema = styled.button`
  background-color: ${({ theme }) => theme.primaria};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
