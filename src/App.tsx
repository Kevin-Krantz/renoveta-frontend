import styled from "styled-components";
<<<<<<< HEAD
import AboutUs from "./components/aboutUs/AboutUs";
=======
import Hero from "./components/Hero";
>>>>>>> master
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Hero />
      <Wrapper>
<<<<<<< HEAD
        <AboutUs />
=======
        <RegisterForm />
>>>>>>> master
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
  background-color: var(--bg-tertiary);
`;
