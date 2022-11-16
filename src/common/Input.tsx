import styled from "styled-components";

interface Props<T> {
  name: keyof T;
  label?: string;
  value: string;
  error?: string;
  type: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
}

function Input<T>({ error, name, label, value, onChange, type }: Props<T>) {
  return (
    <Container>
      <Label htmlFor={name as string}>{label}</Label>
      <input
        className="form-input"
        onChange={onChange}
        id={name as string}
        name={name as string}
        value={value}
        type={type}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: grid;
  padding: 8px;

  .form-input {
    width: 90%;
    padding: 8px 16px;
    margin: 4px 0;
    border-radius: 8px;
    border: 5px solid var(--bg-primary);
  }

  div {
    width: 90%;
    padding: 8px 14px;
    margin: 4px 0;
    border: 5px solid var(--bg-color);
  }
`;

const Label = styled.label`
  padding: 4px;
`;

const Error = styled.div`
  border: 0 !important;
  color: red;
  margin: 0 !important;
  padding: 0 !important;
`;
