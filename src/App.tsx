import styled from "styled-components";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
import Navbar from "./components/Navbar";
>>>>>>> master
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <>
<<<<<<< HEAD
      <Hero />
      {/* <Wrapper>
=======
      <Navbar />
      <Wrapper>
<<<<<<< HEAD
        <RegisterForm />
      </Wrapper>
=======
>>>>>>> master
        <RegisterForm />
      </Wrapper> */}
>>>>>>> master
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
  background-color: var(--bg-tertiary);
`;
