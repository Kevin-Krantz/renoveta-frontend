import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Nav";
=======
import Home from "./components/firstPage/Home";
import Footer from "./components/firstPage/Footer";
import Navbar from "./components/Navbar";
>>>>>>> master
import AboutUs from "./components/aboutUs/AboutUs";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { IMember } from "./types/Member";
import { getMembers } from "./components/aboutUs/Team";
import FAQ from "./components/FAQ";
import RenovetaForm from "./components/renovetaForm/RenovetaForm";

function App(): JSX.Element {
  const [members, setMembers] = useState<IMember[]>([]);

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs members={members} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/kalkylen" element={<RenovetaForm />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
