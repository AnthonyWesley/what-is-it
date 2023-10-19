import styled from "styled-components";
import { px2vw } from "../../Global";

export const Container = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 85%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 ${px2vw(10)};
  padding: ${px2vw(30)};
  font-size: ${px2vw(80)};

  width: ${px2vw(320, 320)};

  @media (min-width: 1024px) {
    width: ${px2vw(680)};
    font-size: ${px2vw(23)};
  }

  h1 {
    background-color: #e25b00;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 100px; */

  span:nth-child(1) {
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h2 {
      padding: 0 10px;
    }
  }

  span:nth-child(2) {
    align-self: center;
    display: flex;
    justify-content: center;
    width: 2px;
    height: 100px;
    rotate: 35deg;
    border: 1px solid white;
  }

  span:nth-child(3) {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h2 {
      padding: 0 10px;
    }
  }
`;
export const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e25b00;
  }
`;
export const StatsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 2rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :hover {
    cursor: pointer;
  }
`;
