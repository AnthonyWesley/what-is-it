import styled from "styled-components";
import { px2vw } from "../../Global";

type ContainerProps = {
  isopen: boolean | undefined;
};
export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isopen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
  /* opacity: ${(props) => (props.isopen ? "1" : "0")};
  transition: opacity 5s ease-in-out; */
`;

export const Btn = styled.button`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 5%);
    color: white;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${px2vw(1300)};
  background-color: rgba(0, 0, 0, 85%);
  padding: ${px2vw(40)};
  border-radius: 5px;
  border: 1px solid rgba(249, 105, 14, 85%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  margin-bottom: ${px2vw(1000)};

  /* @media (min-width: 768px) {
    padding: ${px2vw(20)};
    width: ${px2vw(180)};
    margin-bottom: ${px2vw(250)};
  } */

  @media (min-width: 1024px) {
    padding: ${px2vw(15)};
    width: ${px2vw(380)};
    margin-bottom: ${px2vw(250)};
  }
`;

export const Header = styled.div`
  display: flex;
  color: orange;
  justify-content: space-between;
`;

export const Area = styled.div`
  font-size: ${px2vw(70)};

  /* @media (min-width: 768px) {
    font-size: ${px2vw(20)};
  } */

  @media (min-width: 1024px) {
    font-size: ${px2vw(16)};
  }
  /* font-style: italic; */
`;

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  gap: ${px2vw(5)};
`;

export const Button = styled.button`
  padding: ${px2vw(40)} ${px2vw(60)};
  align-items: flex-end;

  /* @media (min-width: 768px) {
    padding: ${px2vw(20)} ${px2vw(40)};
  } */

  @media (min-width: 1024px) {
    padding: ${px2vw(10)} ${px2vw(20)};
    /* width: ${px2vw(50)};
    height: ${px2vw(30)}; */
  }

  &:hover {
    background-color: orange;
    color: white;
  }
`;
