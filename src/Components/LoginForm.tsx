import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../components/common/Form";

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

    doSubmit: () => {
      console.log("log in");
    },
    formData,
    setFormData,
    formErrors,
    setFormErrors,
  };

  const { renderInput, renderButton, handleSubmit } = useForm(rule);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>Login Form</Title>
      {renderInput({ label: "E-mail", name: "email" })}
      {renderInput({ label: "Password", name: "password", type: "password" })}
      {renderButton({ label: "Log in" })}
    </Wrapper>
  );
}

export default LoginForm;
const Wrapper = styled.form`
  background-color: var(--bg-secondary);
  border: 5px solid var(--bg-primary);
  border-radius: 45px;
  color: var(--text-primary);
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 20px;
  width: 30%;
  height: auto;
  position: absolute;
  top: 5%;
  left: 30%;
`;

const Title = styled.span`
  font-size: 38px;
  margin: 24px;
`;
