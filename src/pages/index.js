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
const favs = ["React", 'Angular (2+)', 'CSS', 'SASS', 'JavaScript', 'Mongo', 'Figma', 'GitHub', 'Jira', 'SVG', 'Netlify', 'Bootstrap', 'VSCode', 'Yarn', 'Refactoring', 'Typography', 'Karaoke', 'Bike Share', 'Vintage', 'Tea', 'Sushi', 'Xiaolongbao', 'Curry', 'Singapore', 'Chicago', 'Madrid', '80s music', '90s too'
]
const projects = [
  {
  name: 'Tanto', 
  url: "https://mct-project-t3-demo.netlify.com",
  img: tanto
}, 
  {
  name: 'Portfolio', 
  url: "https://tomomioki.netlify.com",
  img: port
},
  {
  name: 'Zodiac Redifined', 
  url: "https://zodiac-redefined.netlify.com",
  img: zodiac
},
  {
  name: 'Wordsworth', 
  url: "https://wordsworth.herokuapp.com",
  img: wordsworth
},
  {
  name: 'My Cookbook', 
  url: "https://radiant-beach-49950.herokuapp.com/",
  img: mycookbook
},
  {
  name: 'Radiohead fansite', 
  url: "https://secretary-answers-11183.netlify.com",
  img: radiohead
},
]

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
          }, 700);

          if (i === 0) {
            return (
              <a href="cv" title="Get CV (word)">
                {circle}
              </a>
            );
          } else if (i === 1) {
            return (
              <a href="pdf" title="Get CV (pdf)">
                {circle}
              </a>
            );
          } else
            return (
              <a href="https://github.com/okichan" title="Go to Github">
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
          <S.WorkItem src={project.url} key={project.name}>
            <img src={project.img} /><span>{ project.name }</span>
          </S.WorkItem>
          )
        })}
    </S.WorksContainer>

    <S.Title>FAVOURITES</S.Title>
      <S.FavContainer>
        <ul>
          {favs.map(f => {
            return (
              <li>{f}</li>
            )
          })}
        </ul>
        </S.FavContainer>    

    <S.Footer>
      <a href="https://github.com/okichan" >
        {svgs.github}
      </a>
      <a href="https://www.linkedin.com/in/tomomi-oki-parsons/" >
        {svgs.linkedin}
      </a>
      <p>
        &copy;{`${new Date().getFullYear()} `}
        Tomomi Oki, 
        coded with
        <S.Love />
        , <a href="https://reactjs.org/" >React</a>, <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://www.styled-components.com/">Styled Components</a>.
      </p>
    </S.Footer>
  </S.Container>
);
