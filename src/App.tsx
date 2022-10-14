import styled from "styled-components";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Wrapper>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
        <h1>TESTING</h1>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
