import React from "react";

interface CheckboxProps {
  id?: number;
  handleCheck?(event: React.ChangeEvent<HTMLInputElement>): void;
  isChecked?: boolean;
  value?: string;
  className?: string;
  name: string;
}
function Checkbox(props: CheckboxProps) {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheck}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
        className={props.className}
        name={props.name}
      />
      {props.name}
    </li>
  );
}

export default Checkbox;
