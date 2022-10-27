import styled, { css } from "styled-components";

interface Props {
  type: any;
  disabled?: any;
  label: string;
  primary: boolean;
  className?: string;
}

function Button({ type, disabled, label, primary, className }: Props) {
  return (
    <B primary={primary} type={type} disabled={disabled} className={className}>
      {label}
    </B>
  );
}

export default Button;

interface ButtonProps {
  primary: boolean;
}

const B = styled.button<ButtonProps>`
  width: 209px;
  height: 57px;
  border-radius: 45px;
  border: 2px solid var(--bg-color);
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background-color: var(--bg-color);
      color: var(--text-primary);
    `};
`;
