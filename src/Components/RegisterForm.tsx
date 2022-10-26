import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../components/common/Form";
import user from "../services/userService";

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
        console.log("submitted");
        //vart ska user sen? inloggad page?
      } catch (error) {
        if (error.response.status === 400) {
          const formErrors = { name: error.response.data };
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
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 20px;
<<<<<<< HEAD
  width: 30%;
  height: auto;
  position: absolute;
  top: 5%;
  left: 30%;
=======
  width: 45%;
  margin-left: 25%;
  top: 10%;
  left: 25%;
>>>>>>> master
`;

const Title = styled.span`
  font-size: 38px;
  font-weight: bolder;
  margin: 24px;
`;
