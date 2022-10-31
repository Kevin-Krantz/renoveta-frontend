import styled from "styled-components";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Wrapper>
        <LoginForm />
        <Hero />
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
