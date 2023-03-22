import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: unset;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: unset;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Subtitle = styled.h2`
  color: #212121;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #8f8d8d;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Olá 👋</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Seja bem-vindo! Eu sou João Lucca.</Subtitle>
          </WhatWeDo>
          <Desc>
            Desenvolvedor Full-Stack
          </Desc>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1,100,200]} scale={1.2}>
            <MeshDistortMaterial
              color="#000"
              attach="material"
              distort={0.5}
              speed={2}
            />
            </Sphere>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
