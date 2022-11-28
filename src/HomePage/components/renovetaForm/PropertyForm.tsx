import styled from "styled-components";
<<<<<<< HEAD:src/HomePage/components/renovetaForm/PropertyForm.tsx
import Checkbox from "../../../common/Checkbox";
=======
import Checkbox from "../../common/Checkbox";
>>>>>>> master:src/components/renovetaForm/PropertyForm.tsx
import { useState, useEffect } from "react";
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
  const MaterialType = [
<<<<<<< HEAD:src/HomePage/components/renovetaForm/PropertyForm.tsx
    { id: "1", name: "Tegelpannor" },
    { id: "2", name: "Plåt" },
    { id: "3", name: "Papp/Shingel" },
    { id: "4", name: "Eternit" },
    { id: "5", name: "Betongpannor" },
    { id: "6", name: "Annat" },
  ];

  const RoofType = [
    { id: "1", name: "Sadeltak", img: "images/roofstyles/sadeltak.png" },
    { id: "2", name: "Pulpettak", img: "images/roofstyles/pulpettak.png" },
    { id: "3", name: "Valmat tak", img: "images/roofstyles/valmat.png" },
    { id: "4", name: "Mansardtak", img: "images/roofstyles/mansard.png" },
    { id: "5", name: "Motfallstak", img: "images/roofstyles/motfalls.png" },
    { id: "6", name: "Platt tak", img: "images/roofstyles/platt.png" },
    { id: "7", name: "Annat", img: "images/roofstyles/annat.png" },
=======
    { id: "11", name: "Tegelpannor" },
    { id: "22", name: "Plåt" },
    { id: "33", name: "Papp/Shingel" },
    { id: "44", name: "Eternit" },
    { id: "55", name: "Betongpannor" },
    { id: "66", name: "Annat" },
  ];

  const RoofType = [
    { id: "10", name: "Sadeltak", img: "images/roofstyles/sadeltak.png" },
    { id: "20", name: "Pulpettak", img: "images/roofstyles/pulpettak.png" },
    { id: "30", name: "Valmat tak", img: "images/roofstyles/valmat.png" },
    { id: "40", name: "Mansardtak", img: "images/roofstyles/mansard.png" },
    { id: "50", name: "Motfallstak", img: "images/roofstyles/motfalls.png" },
    { id: "60", name: "Platt tak", img: "images/roofstyles/platt.png" },
    { id: "70", name: "Annat", img: "images/roofstyles/annat.png" },
>>>>>>> master:src/components/renovetaForm/PropertyForm.tsx
  ];

  return (
    <Container>
      <CheckboxWrapper>
        {RoofType.map((option) => (
          <CheckboxBg key={option.id}>
            <Image src={option.img} />
            <Checkbox
              className="checkbox-input"
              key={option.id}
              id={option.id}
              checked={option.name === roofType}
              handleCheck={(e) => {
                updateFields({ roofType: e.target.name });
              }}
              value={roofType}
              name={option.name}
              type="checkbox"
            />
          </CheckboxBg>
        ))}
      </CheckboxWrapper>

      <label>Vilket material består ditt tak av idag?</label>
      <CheckboxContainer>
        {MaterialType.map((option) => (
          <CheckboxBg key={option.id}>
            <Checkbox
              className="checkbox-input"
              key={option.id}
              id={option.id}
              checked={option.name === materialType}
              handleCheck={(e) => {
                updateFields({ materialType: e.target.name });
              }}
              value={materialType}
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
          placeholder="Ange vinkel"
          onChange={(e) => updateFields({ roofAngle: e.target.value })}
        />
        <label>Vad är måtten på din bostad?</label>
        <LeftInput>
          <input
            placeholder="Ange längd"
            className="form-input-xs"
            type="text"
            value={propertyLength}
            onChange={(e) => updateFields({ propertyLength: e.target.value })}
          />
          <input
            placeholder="Ange bredd"
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
    padding: 4px;
    text-align: center;
  }
  input::placeholder {
    font-size: 12px;
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
const Image = styled.img`
  width: 115px;
  margin: 0 auto;
`;
const CheckboxWrapper = styled(CheckboxContainer)`
  display: grid;
  grid-template-columns: 130px 130px 130px 130px;
  grid-template-rows: 2;
  grid-gap: 5px;
`;
