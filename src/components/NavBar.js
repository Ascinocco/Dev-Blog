import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid var(--primary-blue);
  padding: 0 5px;

  span {
    display: inline-block;
    color: var(--primary-blue);
    margin: 0 5px;
  }

  @media only screen and (max-width: 599px) {
    font-size: 0.7rem;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <span>|</span>
      <div>
        <a target="_blank" href="https://twitter.com/scinocco_a">
          Twitter
        </a>
        <a target="_blank" href="https://ca.linkedin.com/in/anthonyscinocco">
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/Ascinocco">
          Github
        </a>
        <a target="_blank" href="https://hub.docker.com/u/anthonyscinocco">
          Docker Hub
        </a>
      </div>
    </Nav>
  )
}