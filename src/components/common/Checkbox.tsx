import React from "react";

interface CheckboxProps {
  id?: string;
  handleCheck?(event: React.ChangeEvent<HTMLInputElement>): void;
  checked?: boolean;
  value?: string;
  className?: string;
  name: string;
}
function Checkbox(props: CheckboxProps) {
  return (
    <>
      <input
        key={props.id}
        id={props.id}
        onChange={props.handleCheck}
        type="radio"
        checked={props.checked}
        value={props.value}
        className={props.className}
        name={props.name}
      />
      {props.name}
    </>
  );
}

export default Checkbox;
