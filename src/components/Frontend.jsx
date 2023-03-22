import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const TechLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TechLogos = styled.img`
  margin: 5px 0px;
  height: 132px;
  width: 132px;
`;

const Frontend = () => {
  return (
    <Container>
      <TechLogosContainer>
        <TechLogos src='/img/html.svg'/>
        HTML
      </TechLogosContainer>
      <TechLogosContainer>
        <TechLogos src='/img/css.svg'/>
        CSS
      </TechLogosContainer>
      <TechLogosContainer>
        <TechLogos src='/img/js.svg'/>
        JavaScript
      </TechLogosContainer>
      <TechLogosContainer>
        <TechLogos src='/img/reactjs-icon.svg'/>
        React.js
      </TechLogosContainer> 
    </Container>
  )
}

export default Frontend;