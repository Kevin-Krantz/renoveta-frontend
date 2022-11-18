import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserForm } from "../services/formService";

function Form() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    populateFormData();
  }, []);

  function populateFormData() {
    const fetchForm = async () => {
      const form = await getUserForm();
      setForm(form);
    };
    fetchForm();
    console.log("form", form);
  }
  return <div>The form is here!</div>;
}

export default Form;
