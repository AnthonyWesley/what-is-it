import styled from "styled-components";
import { px2vw } from "../../Global";

export const Container = styled.div`
  flex-grow: 0.3;
  width: 100%;
  /* min-height: 140px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e25b00;
  background-color: rgba(0, 0, 0, 75%);

  text-align: center;
  /* position: relative; */
  /* @media (min-width: 768px) {
    font-size: ${px2vw(20)};
    flex-grow: 2;
  } */

  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
    /* flex-grow: 1; */
  }
`;

export const WordArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type letterProps = {
  colors?: boolean | undefined;
};
export const Letter = styled.div<letterProps>`
  width: ${px2vw(80)};
  display: flex;
  justify-content: center;
  margin-right: 5px;
  font-size: ${px2vw(80)};
  color: ${(props) => (props.colors ? "#e25b00" : "#ffe100")};

  /* @media (min-width: 768px) {
    width: ${px2vw(20)};
    font-size: ${px2vw(20)};
  } */

  @media (min-width: 1024px) {
    width: ${px2vw(30)};
    font-size: ${px2vw(30)};
  }
`;

export const Underline = styled.div`
  width: ${px2vw(80)};
  border-bottom: 2px solid #e25b00;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-top: 20px;

  /* @media (min-width: 768px) {
    width: ${px2vw(20)};
    font-size: ${px2vw(20)};
  } */

  @media (min-width: 1024px) {
    width: ${px2vw(30)};
    font-size: ${px2vw(30)};
  }
`;
