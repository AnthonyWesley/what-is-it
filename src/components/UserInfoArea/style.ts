import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 0.03;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: black;
  box-shadow: #784513 0px 0px 5px -2px;
  margin: 5px;
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.2rem;
  }

  div {
    display: flex;
    justify-content: center;
    border: none;
    color: white;
    background-color: #212121;

    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      color: orange;
      outline-color: orange;
      transition: 0.4s;
      transition-property: box-shadow;
    }
  }
`;
