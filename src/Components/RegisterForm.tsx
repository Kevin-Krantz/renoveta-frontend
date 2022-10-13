import Joi from "joi";
import styled from "styled-components";
import { useState } from "react";
import Input from "../Components/Common/Input";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type Strict<Type> = {
  [Property in keyof Type]: string;
};

const data: Strict<RegisterFormData> = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

type RegisterFormErrors = Strict<Partial<RegisterFormData>>;

function RegisterForm() {
  const [formData, setFormData] = useState<Strict<RegisterFormData>>(data);
  const [formErrors, setFormErrors] = useState<RegisterFormErrors>({});

  const schema = Joi.object<RegisterFormData>({
    firstName: Joi.string().label("First Name").min(2).required(),
    lastName: Joi.string().label("Last Name").min(2).required(),
    email: Joi.string()
      .min(2)
      .email({ tlds: { allow: false } })
      .required()
      .label("E-mail"),
    password: Joi.string().min(6).required().label("Password"),
  });

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = schema.validate(formData, options);

    if (!error) return null;

    const errors: RegisterFormErrors = {};
    for (const detail of error.details)
      errors[detail.context?.key as keyof RegisterFormErrors] = detail.message;

    return errors;
  };

  const validateProperty = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const subSchema = schema.extract(name);
    const { error } = subSchema.validate(value);

    if (!error) return null;
    return error.message;
  };

  const handleChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const errors = { ...formErrors };
    const errorMessage = validateProperty(input);

    const inputName = input.name as keyof RegisterFormErrors;
    if (errorMessage) errors[inputName] = errorMessage;
    else delete errors[inputName];

    formData[inputName] = input.value;
    setFormData({ ...formData });
    setFormErrors(errors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors || {});

    if (errors) return;
    console.log("submitted");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>Register Form</Title>
      <Input
        onChange={handleChange}
        label="First Name"
        value={formData.firstName}
        name="firstName"
        error={formErrors.firstName as keyof RegisterFormErrors}
        type="text"
      />
      <Input
        onChange={handleChange}
        label="Last Name"
        value={formData.lastName}
        name="lastName"
        error={formErrors.lastName as keyof RegisterFormErrors}
        type="text"
      />
      <Input
        onChange={handleChange}
        label="E-Mail"
        name="email"
        value={formData.email}
        error={formErrors.email as keyof RegisterFormErrors}
        type="text"
      />
      <Input
        onChange={handleChange}
        label="Password"
        name="password"
        value={formData.password}
        error={formErrors.password as keyof RegisterFormErrors}
        type="password"
      />
      <Button type="submit">Register</Button>
    </Wrapper>
  );
}

export default RegisterForm;

const Wrapper = styled.form`
  background-color: var(--bg-secondary);
  border: 5px solid var(--bg-primary);
  border-radius: 18px;
  color: var(--text-primary);
  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  width: 45%;
  position: absolute;
  top: 10%;
  left: 25%;
`;

const Title = styled.span`
  font-size: 38px;
  margin: 24px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid var(--bg-secondary);
  color: var(--text-primary);
  background-color: var(--bg-color);
`;
