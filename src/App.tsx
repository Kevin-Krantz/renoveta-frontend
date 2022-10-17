import styled from "styled-components";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

function App(): JSX.Element {
  return (
    <>
      <Wrapper>
        <LoginForm />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
