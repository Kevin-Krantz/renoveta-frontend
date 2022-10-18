import styled from "styled-components";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <>
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
`;
