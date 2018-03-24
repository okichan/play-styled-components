import styled, { css } from "styled-components";
import paper from "./paper.png";

const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `
};

export const Container = styled.body`
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
  font-size: 16px;
  padding: 2vh 0;
  ${media.tablet`
  font-size: 2.5vw;
`};
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
  color: #f2f2f2;
  text-align: right;
  padding: 0 2vw;
  background: #a8b4b5;
  
  span {
    visibility: hidden;
  }
  
  ${media.tablet`
  line-height: 4;
  
  span {
    visibility: visible;
  } 
`};
`;

export const Social = styled.img`
  float: left;
  height: 22px;
  width: 22px;
  margin-right: 10px;
  transform: translateY(10px);
  top: 50%;

  ${media.tablet`
  height: 44px;
  width: 44px;
  margin-right: 15px;
`};
`;

export const Love = styled.span`
  color: orangered;

  &:before {
    content: " ♥";
  }
`;

export const Box = styled.div`
  ${media.tablet`
    color: skyblue;
  `};
`;
