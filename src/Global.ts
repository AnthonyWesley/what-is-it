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

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: 0.3s ease;
    
  }
  :root {
    font-size: ${px2vw(60)};

    @media (min-width: 468px) {
      font-size: ${px2vw(40)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(20)};
    }
  }

  body {

    background-color: #784513;
    font-family: 'Agdasima', sans-serif;
/* font-family: 'Alumni Sans', sans-serif; */
    color: #784513;

    background-image: url(${bg});
    background-repeat: no-repeat, repeat;
    background-position: bottom;
    background-size: cover;
    overflow: hidden;
    /* position: relative; */
    animation: ${slide} 30s infinite;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${px2vw(10)};
  /* max-width: 100%; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  height: 100%;

  @media (min-width: 1024px) {
    width: ${px2vw(780)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  text-align: center;
`;
