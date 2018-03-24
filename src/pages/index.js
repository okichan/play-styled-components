import React from "react";
import Link from "gatsby-link";
import "./App.css";
import * as S from "../assets/styles";
import Typography from "typography";


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Arial", "serif"]
});

export default () => (
  <S.Container>
    <div className="svg-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMin slice">
        <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text>
          <textPath xlinkHref="#curve">&nbsp;&nbsp;&nbsp;TOMOMI</textPath>
        </text>
      </svg>
    </div>
    <S.Title>Hello Gatsby!</S.Title>
    <S.P>What a world1121....!</S.P>
    {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>

    <div id="warped">
      <span class="w0">T</span>
      <span class="w1">O</span>
      <span class="w2">M</span>
      <span class="w3">O</span>
      <span class="w4">M</span>
      <span class="w5">I</span>
    </div>






    
  </S.Container>
);
