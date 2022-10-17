import styled from "styled-components";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <>
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
`;
