import styled from "styled-components";
import React, { useState } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Plus from "./Plus";

const data = [
  "Frontend",
  "Backend",
  "+"
];

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }  
`;

const Container = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const ClickHere = styled.p`
  font-size: 20px;
  position: absolute;
  top: 6.6rem;
  left: 20rem;
  display: block;

  @media only screen and (max-width: 767px) {
    top: 5rem;
    left: 11rem;
    font-size: 11px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 9rem;
    left: 18rem;
    font-size: 13px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.img`
  position: absolute;
  top: 7.6rem;
  left: 17.5rem;
  height: 30px;
  width: 30px;
  animation: updown 2s infinite ease-out;

  @media only screen and (max-width: 768px) {
    top: 5.7rem;
    left: 9.5rem;
    height: 14px;
    width: 14px;
    animation: updownMobile 2s infinite ease-out;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 5rem;
    left: 22rem;
  }

  @keyframes updown {
    0% {
      top: 7.5rem;
      opacity: 0.3;
    }
    50% {
      top: 7.2rem;
      opacity: 0.6;
    }
    100% {
      top: 7.6rem;
    }
  }

  @keyframes updownMobile {
    0% {
      top: 5.5rem;
      opacity: 0.3;
    }
    50% {
      top: 5.4rem;
      opacity: 0.6;
    }
    100% {
      top: 5.7rem;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2.9rem;
  }
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    color: #4b2d06;
    -webkit-text-stroke: 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 50px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText .6s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Stacks = () => {
  const [work, setWork] = useState("");

  return (
    <Section>
      <Container>
        <Left>
          <ClickHere>
            clique para saber minha stack 👨‍💻
          </ClickHere>
          <Arrow src="./img/arrow.png"/>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Frontend" ? (
            <Frontend />
          ): work === "Backend" ? (
            <Backend />
          ): work === "+" ? (
            <Plus/>
          ): ''}
        </Right>
      </Container>
    </Section>
  );
};

export default Stacks;
