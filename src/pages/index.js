import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`;

export default () => (
  <div>
    <Title>Hello Gatsby!</Title>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);
