import styled from "styled-components";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Wrapper>
        <AboutUs />
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
