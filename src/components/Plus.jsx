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

const Plus = () => {
  return (
    <Container>
      <TechLogosContainer>
        <TechLogos src='/img/git-scm-icon.svg'/>
        Git
      </TechLogosContainer>
      <TechLogosContainer>
        <TechLogos src='/img/github-icon.svg'/>
        Github
      </TechLogosContainer>
    </Container>
  )
}

export default Plus