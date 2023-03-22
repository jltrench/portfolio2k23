import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.h1`
  font-family: inherit;
  font-size: 22px;
  
  transform: rotate(-2deg);

  &:hover {
    text-decoration: underline;
    transform: rotate(0deg);
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

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #201f1f;
  color: #FFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo>João Lucca Trench</Logo>
                <List>
                    <ListItem>Nome</ListItem>
                    <ListItem><a>Sobre</a></ListItem>
                    <ListItem>Tecnologias</ListItem>
                </List>
            </Links>
            <Icons>
                <Button>Contato</Button>
            </Icons>
        </Container>
    </Section>
  );
}

export default Navbar;