import { Route, Routes, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./HomePage/components/firstpage/Home";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/components/navbar/Nav";
import AboutUs from "./HomePage/components/aboutUs/AboutUs";
import LoginForm from "./HomePage/LoginForm";
import { IMember } from "./types/Member";
import { getMembers } from "./HomePage/components/aboutUs/Team";
import FAQ from "./HomePage/components/FAQ/FAQ";
import auth from "./services/authService";
import Logout from "./MyPages/Logout";
import MyPage from "./MyPages/MyPage";
import RenovetaForm from "./HomePage/components/renovetaForm/RenovetaForm";
import RegisterForm from "./HomePage/RegisterForm";
import FormsTable from "./MyPages/FormsTable";
import Form from "./MyPages/Form";
import { IUser } from "./types/User";
import WhyRenoveta from "./HomePage/components/firstpage/WhyRenoveta";
import { IMenue } from "./types/Menue";
import { getMenue } from "./HomePage/components/navbar/Menue";

function App(): JSX.Element {
  const [members, setMembers] = useState<IMember[]>([]);
  const [users, setUsers] = useState<IUser>();
  const [menue, setMenue] = useState<IMenue[]>([]);

  useEffect(() => {
    setMembers(getMembers());
    setMenue(getMenue());

    const fetchUsers = async () => {
      const users = await auth.getCurrentUser();
      setUsers(users as IUser);
    };

    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <Navbar user={users} menue={menue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs members={members} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/whyrenoveta" element={<WhyRenoveta />} />
        <Route path="/renovetaform" element={<RenovetaForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/minasidor" element={<MyPage user={users} />} />
        <Route path="/forms/:userId" element={<Form />} />
      </Routes>
      <Footer menue={menue} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
