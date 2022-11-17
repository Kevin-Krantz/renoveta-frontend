import { useEffect, useState } from "react";
import { getForm } from "../services/formService";

function Form() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    const fetchForm = async () => {
      const form = await getForm();
      setForm(form);
    };
    fetchForm();
  });

  return <div>{form}</div>;
}

export default Form;
