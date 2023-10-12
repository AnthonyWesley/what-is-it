import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 65%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;

  h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #e25b00;
    width: 100%;
    color: white;
  }
  p {
    width: 100%;
    color: white;
    font-style: italic;
  }
`;

export const HomeInput = styled.input`
  background-color: #212121;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  text-align: center;
  border: 1px solid #212121;
  border-radius: 5px;
  box-shadow: 0px 0px 5px orange;

  &:focus {
    color: orange;
    background-color: #212121;
    outline-color: orange;
    box-shadow: -3px -3px 15px orange;
    transition: 0.4s;
    transition-property: box-shadow;
  }
`;

export const HomeButton = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  padding: 10px;
  height: 50px;
  border: 2px solid #212121;
  border-radius: 5px;
  box-shadow: 0px 0px 5px orange;

  &:hover {
    cursor: pointer;
    color: orange;
    outline-color: orange;
    box-shadow: 0px 0px 15px orange;
    transition: 0.4s;
    transition-property: box-shadow;
  }
`;

export const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #212121;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #212121;
  border-radius: 5px;
  box-shadow: 0px 0px 5px orange;

  p {
    display: flex;
    align-items: center;
  }
`;
