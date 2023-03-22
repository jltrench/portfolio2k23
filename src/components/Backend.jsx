import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TechLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TechLogos = styled.img`
  margin: 0px 5px;
  height: 132px;
  width: 132px;
`;

const Backend = () => {
  return (
    <Container>
      <TechLogosContainer>
        <TechLogos src='/img/nodejs-icon.svg'/>
        Node.js
      </TechLogosContainer>
    </Container>
  )
}

export default Backend;