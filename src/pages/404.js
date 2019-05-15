import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: var(--primary-blue);
  }
`;

export default function ErrorPage404() {
  return (
    <Container>
       <h1>Hmm, seems the page you looked up does not exist &#129300;</h1>
    </Container>
  );
}
