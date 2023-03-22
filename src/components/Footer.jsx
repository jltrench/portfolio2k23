import React from 'react';
import styled from "styled-components";

const Container = styled.footer`
  margin-top: -3rem;
  width: 100%;
  text-align: center;
`;
const FooterText = styled.p`
  font-size: 16px;
  color: #b6b1ab;
`;

const Footer = () => {
  return (
    <Container>
      <FooterText>
        © 2023 João Lucca Trench. Todos os direitos reservados.
      </FooterText>
    </Container>
  )
}

export default Footer