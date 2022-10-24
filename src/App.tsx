import styled from "styled-components";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <>
      <Hero />
      <Wrapper>
        <RegisterForm />
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
