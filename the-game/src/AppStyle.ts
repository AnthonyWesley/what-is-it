import styled, { createGlobalStyle, keyframes } from "styled-components";
import bg from "./helpers/bg-scarecrow.svg";

const slide = keyframes`
  0% {
    background-position: center
  }
  50% {
    background-position: bottom
  }
  100% {
    background-position: center
  }
`;

export const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: 0.3s ease;
  }

  body {
    background-color: #784513;
    font-family: 'Agency FB', sans-serif;
    color: #784513;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    background-image: url(${bg});
    background-repeat: no-repeat, repeat;
    background-position: bottom;
    background-size: cover;
    overflow: hidden;
    position: relative;
    animation: ${slide} 30s infinite;

    @media (max-width: 820px) {
  }

  @media (max-width: 420px) {
        /* align-items: center; */
  }
  }
`;
export const Container = styled.div`
  position: relative;
  /* box-shadow: #784513 0px 2px 5px -1px, #784513 0px 1px 3px -1px; */
  width: 620px;
  display: flex;
  justify-content: center;
  margin: 10px 20px;
  overflow: hidden;

  @media (max-width: 620px) {
    width: 430px;
  }

  @media (max-width: 420px) {
    width: 320px;
  }
`;

export const FlexArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const Header = styled.h1`
  width: 100%;
  height: 40px;
  font-size: 2em;
  text-align: center;
  color: black;
`;
