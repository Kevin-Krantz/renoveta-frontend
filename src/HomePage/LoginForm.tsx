import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../common/Form";
import auth from "../services/authService";
import { ScrollToTop } from "../common/ScrollToTop";
import { Link } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

type Strict<Type> = {
  [Property in keyof Type]: string;
};

const data: Strict<LoginFormData> = {
  email: "",
  password: "",
};

type Errors = Strict<Partial<LoginFormData>>;

function LoginForm() {
  const [formData, setFormData] = useState<Strict<LoginFormData>>(data);
  const [formErrors, setFormErrors] = useState<Errors>({});

  const rule = {
    schema: Joi.object<LoginFormData>({
      email: Joi.string()
        .required()
        .min(2)
        .email({ tlds: { allow: false } })
        .label("E-mail"),
      password: Joi.string().required().label("Password"),
    }),

    doSubmit: async () => {
      try {
        await auth.login({ formData });
        window.location.replace("/");
      } catch (error) {
        if (error.response?.status === 400) {
          const formErrors = { email: error.response.data };
          setFormErrors(formErrors);
        }
      }
    },
    formData,
    setFormData,
    formErrors,
    setFormErrors,
  };

  const { renderInput, renderButton, handleSubmit } = useForm(rule);

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Login Form</Title>
      {renderInput({ label: "E-mail", name: "email" })}
      {renderInput({ label: "Password", name: "password", type: "password" })}
      {renderButton({ label: "Log in" })}

      <Link to="/register" onClick={ScrollToTop} className="link">
        Registrera dig här!
      </Link>
    </Container>
  );
}

export default LoginForm;

const Container = styled.form`
  display: grid;
  background-color: var(--bg-secondary);
  border: 5px solid var(--bg-primary);
  border-radius: 45px;
  color: var(--text-primary);
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 20px;
  width: 500px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  margin-left: 400px;

  .link {
    margin-top: 10px;
    font-size: 18px;
    margin: 24px;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 880px) {
    margin-left: 50px;
  }
`;

const Title = styled.span`
  font-size: 38px;
  margin: 24px;
`;
