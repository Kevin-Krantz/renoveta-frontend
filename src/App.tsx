import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Calculator from "./components/calculator/Calculator";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Calculator />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
