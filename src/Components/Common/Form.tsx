import Input from "./Input";
import Button from "./Button";

function useForm({
  schema,
  doSubmit,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  errorsForm,
}: any) {
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = schema.validate(formData, options);

    if (!error) return null;

    const errors: typeof errorsForm = {};
    for (const detail of error.details)
      errors[detail.context?.key as typeof errorsForm] = detail.message;

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

    const inputName = input.name as typeof errorsForm;
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

    doSubmit();
  };

  const renderInput = ({
    label = "string",
    name = "string",
    type = "text",
  }) => {
    return (
      <Input
        onChange={handleChange}
        label={label}
        value={formData[name]}
        name={name}
        error={formErrors[name] as typeof errorsForm}
        type={type}
      />
    );
  };

  const renderButton = ({ label = "string" }) => {
    return <Button type="submit" disabled={validate()} label={label}></Button>;
  };

  return {
    handleSubmit,
    renderInput,
    renderButton,
  };
}

export default useForm;
