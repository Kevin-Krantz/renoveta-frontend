import styled from "styled-components";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Footer />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  display: grid;
  height: 100vh;
`;
