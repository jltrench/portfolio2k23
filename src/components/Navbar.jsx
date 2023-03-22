import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Container = styled.div`
  width: 95vw;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  position: fixed;
  backdrop-filter: blur(10px);
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.h1`
  font-family: inherit;
  font-size: 21px;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: rotate(-2deg);
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>João Lucca Trench</Logo>
          <List>
            <ListItem>
              <a href="https://github.com/jltrench" target={"_blank"}>
                Github
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.linkedin.com/in/jltrench/" target={"_blank"}>
                Linkedin
              </a>
            </ListItem>
            <ListItem>
              <a href="https://react-blog-alpha-swart.vercel.app/" target={"_blank"}>
                Blog
              </a>
            </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
