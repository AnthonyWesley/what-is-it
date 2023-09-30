import styled from "styled-components";
import { px2vw } from "../../Global";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -1;
  margin-bottom: 10%;

  @media (min-width: 760px) {
    width: 65%;
  }
  @media (min-width: 1024px) {
    width: 25%;
    margin-bottom: 5%;
  }

  img {
    transition: 1s;
    width: 100%;
    animation: move 7s infinite;

    @keyframes move {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    /* @media (min-width: 768px) {
      width: ${px2vw(20)};
    } */
  }
`;
