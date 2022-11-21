import Joi from "joi";
import { useState } from "react";
import { sendEmail } from "../services/mailService";
import useForm from "./Form";

interface IMail {
  subject: string;
  adminResponse: string;
}

const schema = Joi.object({
  subject: Joi.string().label("subject"),
  adminResponse: Joi.string(),
});

function MailForm() {
  const [mail, setMail] = useState();

  const rule = {
    schema: Joi.object<IMail>({
      subject: Joi.string(),
      adminResponse: Joi.string(),
    }),
  };

  async function doSubmit() {
    try {
      const res = await sendEmail({
        subject: formData.subject,
        adminResponse: formData.adminResponse,
      });
      setMail(res);
    } catch (error) {
      console.log(error);
    }
  }

  const { formData, renderInput, renderButton, handleSubmit } = useForm(rule);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Meddelande</h1>
      {renderInput({ label: "Subject", name: "subject" })}
      {renderInput({ label: "Meddelande", name: "adminResponse" })}
      {renderButton({ label: "Spara" })}
    </form>
  );
}

export default MailForm;
