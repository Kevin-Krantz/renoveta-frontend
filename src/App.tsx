import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/aboutUs/AboutUs";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
`;
