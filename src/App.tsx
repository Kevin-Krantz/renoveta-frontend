import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
>>>>>>> master
        <RegisterForm />
      </Wrapper> */}
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
  background-color: var(--bg-tertiary);
`;
