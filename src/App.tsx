import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/aboutUs/AboutUs";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { IMember } from "./types/Member";
import { getMembers } from "./components/aboutUs/Team";
import FAQ from "./components/FAQ";
import auth from "./services/authService";
import Logout from "./components/Logout";
import MyPage from "./components/MyPage";

function App(): JSX.Element {
  const [members, setMembers] = useState<IMember[]>([]);
  const [user, setUser] = useState(auth.getCurrentUser());

  useEffect(() => {
    setMembers(getMembers());
    setUser(auth.getCurrentUser());
  }, []);
  return (
    <Wrapper>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs members={members} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/me" element={<MyPage />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
