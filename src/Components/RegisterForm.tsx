import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../components/common/Form";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

type Strict<Type> = {
  [Property in keyof Type]: string;
};

const data: Strict<RegisterFormData> = {
  name: "",
  email: "",
  password: "",
};

type RegisterFormErrors = Strict<Partial<RegisterFormData>>;

function RegisterForm() {
  const [formData, setFormData] = useState<Strict<RegisterFormData>>(data);
  const [formErrors, setFormErrors] = useState<RegisterFormErrors>({});

  const rule = {
    schema: Joi.object<RegisterFormData>({
      name: Joi.string().label(" Name").min(2).required(),
      email: Joi.string()
        .min(2)
        .email({ tlds: { allow: false } })
        .required()
        .label("E-mail"),
      password: Joi.string().min(6).required().label("Password"),
    }),

    doSubmit: () => {
      console.log("submitted");
    },
    formData,
    setFormData,
    formErrors,
    setFormErrors,
  };

  const { renderInput, renderButton, handleSubmit } = useForm(rule);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>Register Form</Title>
      {renderInput({ label: "Name", name: "name" })}
      {renderInput({ label: "E-mail", name: "email" })}
      {renderInput({ label: "Password", name: "password", type: "password" })}
      {renderButton({ label: "Register" })}
    </Wrapper>
  );
}

export default RegisterForm;

const Wrapper = styled.form`
  background-color: var(--bg-secondary);
  border: 5px solid var(--bg-primary);
  color: var(--text-primary);
  border-radius: 45px;
  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: 60px;
  padding-right: 20px;
  width: 35%;
  position: absolute;
  align-self: center;
  top: 10%;
  left: 25%;
`;

const Title = styled.span`
  font-size: 38px;
  font-weight: bolder;
  margin: 24px;
`;
