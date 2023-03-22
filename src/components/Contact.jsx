import styled from "styled-components";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }  
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #201f1f;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #201f1f;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  background-color: #201f1f;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 20px;

  &:active {
    transform: scale(.98);
  }
`;

const Contact = () => {
  const ref = useRef();
  const [sucess, setSucess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epdsgko",
        "template_sh07hgh",
        ref.current,
        "kP4LLqjFVt84SW6dM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(true);
        },
        (error) => {
          console.log(error.text);
          setSucess(false);
          alert("Ops, ocorreu um erro! Tente novamente.");
        }
      );
  };

  return (
    <Section>
      <Container>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contato</Title>
            <Input placeholder="Seu nome" name="name"></Input>
            <Input placeholder="Seu melhor email" name="email"></Input>
            <TextArea
              name="message"
              placeholder="Mensagem"
              rows={10}
            ></TextArea>
            <Button type="submit">
              Enviar
            </Button>
            {sucess &&
              "✉️ Sua mensagem foi enviada. Entrarei em contato logo =D"}
          </Form>
      </Container>
    </Section>
  );
};

export default Contact;
