import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <RegisterForm />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;

const Container = styled.div``;
