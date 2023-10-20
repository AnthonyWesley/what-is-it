import styled from "styled-components";
import { theme } from "../../constants/Theme";
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-content: center;
  background: transparent;
  border: 1px solid #e25b00;
  /* position: relative; */
  top: -40px;
`;

type KeyButtonProps = {
  mark?: string;
  active?: string;
};
export const KeyButton = styled.button<KeyButtonProps>`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  font-weight: 700;
  background-color: ${(props) => props.mark || "white"};
  color: ${(props) => (props.mark ? "white" : theme.fnColor.secondary)};

  opacity: ${(props) => props.active || "null"};

  &:hover:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const TipsButton = styled.div<KeyButtonProps>`
  width: 100%;
  border: 1px solid black;
  background-color: #e25b00;
  color: ${(props) => (props.mark ? "white" : "gold")};

  opacity: ${(props) => (!props.active ? "null" : "0.3")};
`;
