import styled from "styled-components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Stacks from "./components/Stacks";

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
    <Container >
      <Hero />
      <Bio />
      <Stacks />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
