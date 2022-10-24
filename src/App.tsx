import styled from "styled-components";
<<<<<<< HEAD
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
=======
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
>>>>>>> master

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Wrapper>
<<<<<<< HEAD
        <RegisterForm />
=======
        <AboutUs />
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
