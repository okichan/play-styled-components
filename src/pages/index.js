import React from "react";
import Link from "gatsby-link";
import "./App.css";
import divider from "../assets/divider.png";
import * as S from "../assets/styles";
import Typography from "typography";
import git from "../assets/github.svg";
import linked from "../assets/linkedin.svg";


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
        <S.SubTitle>a junior web developer</S.SubTitle>
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
      <p>glijae</p>
    </S.Greeting>

    <S.Title>WORKS</S.Title>
    <div />

    <S.Title>FAVOURITE</S.Title>

    <S.Footer>
      <S.Social src={git} />
      <S.Social src={linked} />
      <span>

      &copy;{`${new Date().getFullYear()} `}
      Tomomi Oki, coded with
      <S.Love />
      , React, Gatsby.js and Styled Components.
      </span>
    </S.Footer>
  </S.Container>
);
