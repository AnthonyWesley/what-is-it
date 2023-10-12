import styled from "styled-components";
import { px2vw } from "../../Global";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${px2vw(5)};
  padding: ${px2vw(5)};
  color: #666;

  p:nth-child(2) {
    font-size: 0.5rem;
  }
`;
