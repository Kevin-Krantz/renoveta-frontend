import { Route, Routes, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./HomePage/components/firstpage/Home";
import Footer from "./components/Footer";
import Navbar from "./HomePage/Nav";
import AboutUs from "./HomePage/components/aboutUs/AboutUs";
import LoginForm from "./HomePage/LoginForm";
import { IMember } from "./types/Member";
import { getMembers } from "./HomePage/components/aboutUs/Team";
import FAQ from "./HomePage/FAQ";
import auth from "./services/authService";
import Logout from "./MyPages/Logout";
import MyPage from "./MyPages/MyPage";
import RenovetaForm from "./components/renovetaForm/RenovetaForm";
import RegisterForm from "./HomePage/RegisterForm";
import FormsTable from "./MyPages/FormsTable";
import Form from "./MyPages/Form";
import { IUser } from "./types/User";

function App(): JSX.Element {
  const [members, setMembers] = useState<IMember[]>([]);
  const [users, setUsers] = useState<IUser>();

  useEffect(() => {
    setMembers(getMembers());

    const fetchUsers = async () => {
      const users = await auth.getCurrentUser();
      setUsers(users as IUser);
    };

    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <Navbar user={users} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs members={members} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/renovetaform" element={<RenovetaForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forms" element={<MyPage user={users} />} />
        <Route path="/forms/:userId" element={<Form />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 45vmax;
`;
