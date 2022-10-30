import styled from "styled-components";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Hero />
        <Navbar />
        <RegisterForm />
        <AboutUs />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
  background-color: var(--bg-tertiary);
`;
