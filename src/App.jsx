import styled from "styled-components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  color: #201f1f;
  background-color: #f0e7db;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default App
