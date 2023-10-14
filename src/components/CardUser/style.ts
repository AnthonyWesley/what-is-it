import styled from "styled-components";

export const Container = styled.div`
  color: white;
  width: 100%;
  background-color: rgba(0, 0, 0, 65%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* h1 {
    display: flex;
    flex-direction: column;
  } */
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;

  span:nth-child(1) {
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h1 {
      padding: 0 10px;
    }
  }

  span:nth-child(2) {
    align-self: center;
    display: flex;
    justify-content: center;
    width: 5px;
    height: 100px;
    rotate: 35deg;
  }

  span:nth-child(3) {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h1 {
      padding: 0 10px;
    }
  }
`;
export const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1.2rem;
  }
`;
export const StatsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  :hover {
    color: #e25b00;
    cursor: pointer;
  }
`;
