import React from "react";
import Link from "gatsby-link";
import "./App.css";
import divider from "../assets/divider.png";
import * as S from "../assets/styles";
import Typography from "typography";
import tanto from "../assets/tanto.png";
import port from "../assets/port.png";
import zodiac from "../assets/zodiac.png";
import wordsworth from "../assets/wordsworth.png";
import mycookbook from "../assets/mycookbook.png";
import radiohead from "../assets/radiohead.png";
import { svgs } from "../assets/Svgs";

const circles = [svgs.circle, svgs.circle, svgs.circle];

export default () => (
  <S.Container>
    <S.Top>
      <div className="center">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMin slice">
          <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text>
            <textPath xlinkHref="#curve">&nbsp;&nbsp;&nbsp;TOMOMI</textPath>
          </text>
        </svg>
        <S.Oki>Oki</S.Oki>
        <S.SubTitle>a web developer</S.SubTitle>
        <figure>
          <S.Divider src={divider} />
        </figure>
      </div>
    </S.Top>

    <S.Greeting>
      <p className="bold hello">Hello there.</p>
      <p className="p-1">
        My name is Tomomi, an aspiring web developer who loves creating simple, elegant and eye-pleasing websites.<br />
        <br />
        In the recent past, I had been in a marketing research industry querying away SQL and dealing with Microsoft Excel.
      </p>
      <p className="p-2">
        The world has evolved whilst I was v-looking up cells, so I decided to go back to school to learn new technologies, which
        turned out to be one of the best decisions I've ever made.
        <br />
        <br />
        In the more distant past, I grew up in Japan and that's what makes me "me" now, although quite frequently it's mixed with
        the quirky culture of Melbourne (north)!
      </p>

      <S.CircleWrapper>
        {circles.map((circle, i) => {
          setTimeout(() => {
            document.getElementsByTagName("svg")[1].setAttribute("id", "circle1");
            document.getElementsByTagName("svg")[2].setAttribute("id", "circle2");
            document.getElementsByTagName("svg")[3].setAttribute("id", "circle3");
          }, 1000);

          if (i === 0) {
            return <a href="cv">{circle()}</a>;
          } else if (i === 1) {
            return <a href="pdf">{circle()}</a>;
          } else return <a href="">{circle()}</a>;
        })}
      </S.CircleWrapper>
    </S.Greeting>

    <S.Title>WORKS</S.Title>
    <S.WorksContainer>
      <S.WorkItem href="https://mct-project-t3-demo.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={tanto} /> <span>Tanto</span>
      </S.WorkItem>
      <S.WorkItem href="https://tomomioki.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={port} /> <span>Portfolio</span>
      </S.WorkItem>
      <S.WorkItem href="https://zodiac-redefined.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={zodiac} /> <span>Zodiac Redifined</span>
      </S.WorkItem>
      <S.WorkItem href="https://wordsworth.herokuapp.com" target="_blank" rel="noopener noreferrer">
        <img src={wordsworth} /> <span>Wordsworth</span>
      </S.WorkItem>
      <S.WorkItem href="https://radiant-beach-49950.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={mycookbook} /> <span>My Cookbook</span>
      </S.WorkItem>
      <S.WorkItem href="https://secretary-answers-11183.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={radiohead} /> <span>Radiohead fansite</span>
      </S.WorkItem>
    </S.WorksContainer>

    <S.Title>FAVOURITE</S.Title>

    <S.Footer>
      <S.Social src={svgs.github()} />
      <S.Social src={svgs.linkedin()} />
      <span>
        &copy;{`${new Date().getFullYear()} `}
        Tomomi Oki, coded with
        <S.Love />
        , React, Gatsby.js and Styled Components.
      </span>
    </S.Footer>
  </S.Container>
);
