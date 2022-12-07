import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../common/Form";
import  user from "../services/userService";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const rule = {
    schema: Joi.object<RegisterFormData>({
      name: Joi.string().label("Name").min(2).required(),
      email: Joi.string()
        .min(2)
        .email({ tlds: { allow: false } })
        .required()
        .label("E-mail"),
      password: Joi.string().min(6).required().label("Password"),
    }),

    doSubmit: async () => {
      try {
       await user.register(formData);

       navigate("/login");
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
    <Wrapper onSubmit={handleSubmit}>
      <Title>Registrera dig</Title>
      {renderInput({ label: "Namn", name: "name" })}
      {renderInput({ label: "Mail", name: "email" })}
      {renderInput({ label: "Lösenord", name: "password", type: "password" })}
      {renderButton({ label: "Registrera" })}
    </Wrapper>
  );
}

export default RegisterForm;

const Wrapper = styled.form`
  background-color: var(--bg-secondary);
  border: 5px solid var(--bg-primary);
  color: var(--text-primary);
  border-radius: 45px;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 20px;
  width: 500px;
  height: auto;
  margin-top: 20px;
  margin-left: 400px;
  margin-bottom: 100px;

  @media screen and (max-width: 880px) {
    margin-left: 50px;
  }
`;

const Title = styled.span`
  font-size: 38px;
  font-weight: bolder;
  margin: 24px;
`;
