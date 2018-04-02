import React, { Fragment } from "react";
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
const favs = [
  "React",
  "Angular (2+)",
  "CSS",
  "SASS",
  "JavaScript",
  "Mongo",
  "Figma",
  "GitHub",
  "Jira",
  "SVG",
  "Netlify",
  "Bootstrap",
  "VSCode",
  "Yarn",
  "Refactoring",
  "Typography",
  "Karaoke",
  "Bike Share",
  "Vintage",
  "Tea",
  "Sushi",
  "Xiaolongbao",
  "Curry",
  "Singapore",
  "Chicago",
  "Madrid",
  "80s music",
  "90s too"
];
const projects = [
  {
    name: "Tanto",
    url: "https://mct-project-t3-demo.netlify.com",
    img: tanto,
    desc: "Sales management app for an existing shop in Melbourne. School group project.",
    stack: "React / Node / Express / Mongo / API / Bootstrap",
  },
  {
    name: "Portfolio",
    url: "https://tomomioki.netlify.com",
    img: port,
    desc: "My old portfolio. School solo project.",
    stack: "React / Node / SCSS / SVG",
  },
  {
    name: "Zodiac Redifined",
    url: "https://zodiac-redefined.netlify.com",
    img: zodiac,
    desc: "Toy app that tells your personality by entering your birth year.",
    stack: "React / Node / Express / Rest API / SCSS",
  },
  {
    name: "Wordsworth",
    url: "https://wordsworth.herokuapp.com",
    img: wordsworth,
    desc: "An Airtasker-like translation portal. School solo project.",
    stack: "Ruby on Rails / Bootstrap",
  },
  {
    name: "My Cookbook",
    url: "https://radiant-beach-49950.herokuapp.com/",
    img: mycookbook,
    desc: "Hackathon group project (to log in enter test@test.com pw: 123123).",
    stack: "Ruby on Rails / Bootstrap",
  },
  {
    name: "Radiohead fansite",
    url: "https://secretary-answers-11183.netlify.com",
    img: radiohead,
    desc: "Sales management app for an existing shop in Melbourne. School group project.",
    stack: "HTML / CSS",
  }
];

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
        <S.SubTitle>web developer</S.SubTitle>
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
          }, 700);

          if (i === 0) {
            return (
              <a href="cv" title="Get CV (word)" key="1">
                {circle}
              </a>
            );
          } else if (i === 1) {
            return (
              <a href="pdf" title="Get CV (pdf)" key="2">
                {circle}
              </a>
            );
          } else
            return (
              <a href="https://github.com/okichan" title="Go to Github" key="3">
                {circle}
              </a>
            );
        })}
      </S.CircleWrapper>
    </S.Greeting>

    <S.Title>WORKS</S.Title>

    <S.WorksContainer>
      {projects.map(project => {
        return (
          <Fragment key={project.name}>
            <S.WorkItem href={project.url} key={project.name} target="_blank">
              <img src={project.img} />
              <span>{project.name}</span>
            </S.WorkItem>
            <S.WorkDesc>{project.desc}<br/>{project.stack}</S.WorkDesc>
          </Fragment>
        );
      })}
    </S.WorksContainer>
    <S.Title>FAVOURITES</S.Title>
    <S.FavContainer>
      <ul>
        {favs.map(f => {
          return <li key={f}>{f}</li>;
        })}
      </ul>
    </S.FavContainer>

    <S.Footer>
      <a href="https://github.com/okichan" >{svgs.github}</a>
      <a href="https://www.linkedin.com/in/tomomi-oki-parsons/">{svgs.linkedin}</a>
      <p>
        &copy;{`${new Date().getFullYear()} `}
        Tomomi Oki, coded with
        <S.Love />
        , <a href="https://reactjs.org/">React</a>, <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
        <a href="https://www.styled-components.com/">Styled Components</a>.
      </p>
    </S.Footer>
  </S.Container>
);
