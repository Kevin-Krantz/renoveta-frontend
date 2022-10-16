import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
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
