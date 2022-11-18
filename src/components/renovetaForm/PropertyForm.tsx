import styled from "styled-components";
import Checkbox from "../../common/Checkbox";
import { useState } from "react";
import { CheckboxContainer, CheckboxBg } from "./RenovationForm";
import { InputLeft, Container } from "./PersonalInfoForm";

type PropertyData = {
  roofType: string;
  materialType: string;
  roofAngle: string;
  propertyWidth: string;
  propertyLength: string;
};

type PropertyFormProps = PropertyData & {
  updateFields: (fields: Partial<PropertyData>) => void;
};

export function PropertyForm({
  roofType,
  materialType,
  roofAngle,
  propertyWidth,
  propertyLength,

  updateFields,
}: PropertyFormProps) {
  const data = [
    { id: 1, name: "Tegelpannor" },
    { id: 2, name: "Plåt" },
    { id: 3, name: "Papp" },
    { id: 4, name: "Eternit" },
    { id: 5, name: "Shingel" },
    { id: 6, name: "Annat" },
  ];
  const [options, setOptions] = useState([]);

  const handleChange = (item: any) => {
    let selectedOption = options;
    if (selectedOption.some((option: any) => option.id === item.id)) {
      selectedOption = selectedOption.filter(
        (option: any) => option.id !== item.id
      );
    } else {
      //@ts-ignore
      selectedOption.push(item);
    }
    setOptions(selectedOption);
  };

  return (
    <Container>
      <label>Vilken typ av tak har du idag?</label>
      <input
        className="form-input-small"
        type="text"
        value={roofType}
        onChange={(e) => updateFields({ roofType: e.target.value })}
      />

      <label>Vilket material består ditt tak av idag?</label>
      <CheckboxContainer>
        {data.map((option) => (
          <CheckboxBg key={option.id}>
            <Checkbox
              className="checkbox-input"
              key={option.id}
              id={option.id}
              handleCheck={() => {
                handleChange(option);
              }}
              name={option.name}
              type="checkbox"
            />
          </CheckboxBg>
        ))}
      </CheckboxContainer>

      <InputContainer>
        <label>Vad är husets takvinkel?</label>
        <input
          className="form-input-xs"
          type="text"
          value={roofAngle}
          onChange={(e) => updateFields({ roofAngle: e.target.value })}
        />
        <label>Vad är måtten på din bostad?</label>
        <LeftInput>
          <input
            placeholder="Längd"
            className="form-input-xs"
            type="text"
            value={propertyLength}
            onChange={(e) => updateFields({ propertyLength: e.target.value })}
          />
          <input
            placeholder="Bredd"
            className="form-input-xs"
            type="text"
            value={propertyWidth}
            onChange={(e) => updateFields({ propertyWidth: e.target.value })}
          />
        </LeftInput>
      </InputContainer>
    </Container>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0 5px 0;
  }

  input {
    width: 100px;
    height: 25px;
    background-color: #d4ede4;
    margin-bottom: 5px;
    border-radius: 5px;
    border: none;
  }
  input::placeholder {
    font-size: 12px;
    padding-left: 20px;
    font-family: "Catamaran", sans-serif;
    font-weight: 700;
    color: var(--text-secondary);
  }
`;
const LeftInput = styled(InputLeft)`
  margin-left: 0;

  input {
    margin-left: 5px;
  }
`;
