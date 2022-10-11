import { useState } from "react";

const data = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const [formData, setFormData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "Submitted");

    setFormData(data);
  };

  return (
    <>
      <div>Register Form</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="firstName">First Name</label>
          <input
            onChange={handleChange}
            className="form-control"
            id="firstname"
          />
        </div>
        <div>
          <label className="lastname">Last Name</label>
          <input
            onChange={handleChange}
            className="form-control"
            id="lastname"
          />
        </div>
        <div>
          <label className="email">E-mail</label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div>
          <label className="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button className="submit">Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
