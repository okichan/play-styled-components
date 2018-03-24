import styled from "styled-components";
import paper from "./paper.png";

export const Container = styled.body`
  // padding-top: 5vh;
  background: #fffcf5;
  color: #666;
`;

export const Top = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Oki = styled.div`
  position: absolute;
  top: 12vw;
  left: 50%;
  transform: translateX(-50%);
  font-family: Pinyon Script;
  font-size: 8vw;
  color: rgba(125, 83, 53, 0.74);
  mix-blend-mode: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SubTitle = styled.p`
  font-family: Cardo;
  text-align: center;
  font-size: 3vw;
  // border: 1px solid red;
  padding: 2vh 0;
`;

export const Divider = styled.img`
  min-width: 200px;
  max-width: 80%;
`;

export const Greeting = styled.div`
  font-family: Cardo;
  font-size: 1.2rem;
  margin: 3vh auto;
  padding: 2rem;
  box-sizing: border-box;
  background: url(${paper}), #f0ece4;
  background-size: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;

  display: grid;
  grid-template-columns: auto 4vw auto;
  grid-template-rows: repeat(3, auto);

  display: -ms-grid;
  -ms-grid-columns: auto 4vw auto;
  -ms-grid-template-rows: auto auto auto;

  & > p {
    margin: 10px 0;
    // border: 1px solid red
    // box-sizing: border-box
  }
`;

export const Title = styled.h1`
  width: 80vw;
  margin: 10vh auto;
  font-weight: normal;
  font-family: Italiana
  font-size: 8vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase
`;

export const Footer = styled.div`
  font-family: Cardo, serif;
  // white-space: nowrap;
  // white-space: pre;
  
  color: #F2F2F2;
  line-height: 4;
  text-align: right;
  padding: 0 2vw;
  background: #a8b4b5;
`;

export const Social = styled.img`
  // position: absolute;
  float: left;
  height: 44px;
  width: 44px;
  margin-right: 15px;
  transform: translateY(10px);
  top: 50%;
`;

export const Love = styled.span`
  color: orangered;

  &:before {
    content: ' ♥';
  }
  
`;
