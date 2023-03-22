import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    margin-top: -14rem;
    flex-direction: column;
  } 
`;

const TechLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TechLogos = styled.img`
  height: 80px;
  width: 80px;


  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }  

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 60px;
    width: 60px;
  }
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