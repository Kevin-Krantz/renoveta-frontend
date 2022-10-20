import styled from "styled-components";

interface Props {
  type: any;
  disabled: any;
  label: string;
}

function Button({ type, disabled, label }: Props) {
  return (
    <B type={type} disabled={disabled}>
      {label}
    </B>
  );
}

export default Button;
const B = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid var(--bg-secondary);
  color: var(--text-primary);
  background-color: var(--bg-color);
  cursor: pointer;
`;
