import styled from "styled-components";
import React, { useRef } from "react";
import PcContainer from "./PcContainer";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: unset;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 95vw;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: unset;
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 58px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 1.6rem;
  left: 7.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #201f1f;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #8f8d8d;
`;

const Button = styled.button`
  background-color: #201f1f;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  height: 50px;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Bio = () => {
  return (
    <Section>
      <Container>
        <Left>
          <PcContainer />
        </Left>
        <Right>
          <Title>Bio</Title>
          <Image src="./img/arroznobg.png" />
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>2020</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            quaerat quae doloremque, assumenda cupiditate minus consectetur
            facere ullam, sint sequi quidem ab corrupti est animi doloribus
            aliquid reprehenderit. Consectetur, quibusdam!
          </Desc>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>2023</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            quaerat quae doloremque, assumenda cupiditate minus consectetur
            facere ullam, sint sequi quidem ab corrupti est animi doloribus
            aliquid reprehenderit. Consectetur, quibusdam!
          </Desc>
          <Button>Meu portfolio &gt;</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Bio;
