import React, { ChangeEvent, FormEvent, useContext } from "react";
import styled from "styled-components";
import Checkbox from "../../common/Checkbox";
import { useState } from "react";
import Right from "./RenovetaForm";

type RenovationData = {
  typeOfRenovation: string;
  changeApperance: string;
};

type RenovationFormProps = RenovationData & {
  updateFields: (fields: Partial<RenovationData>) => void;
};

export function RenovationForm({
  typeOfRenovation,
  changeApperance,
  updateFields,
}: RenovationFormProps) {
  const data = [
    { id: "1", name: "Omläggning" },
    { id: "2", name: "Tvätt" },
    { id: "3", name: "Målning" },
  ];

  return (
    <>
      <label className="checkbox-title">
        Vad för typ av renovering planerar du på att utföra?
      </label>
      <CheckboxContainer>
        {data.map((option) => {
          return (
            <CheckboxBg key={option.id}>
              <Checkbox
                className="checkbox-input"
                key={option.id}
                id={option.id}
                checked={option.name === typeOfRenovation}
                handleCheck={(e) => {
                  updateFields({ typeOfRenovation: e.target.name });
                }}
                name={option.name}
                type="checkbox"
              />
            </CheckboxBg>
          );
        })}
      </CheckboxContainer>
      <label>Planerar du på att ändra - färg, material eller form?</label>
      <input
        className="form-input"
        placeholder="Beskriv vad du ska ändra på din bostad"
        type="text"
        value={changeApperance}
        onChange={(e) => updateFields({ changeApperance: e.target.value })}
      />
    </>
  );
}

export const CheckboxContainer = styled.ul`
  list-style: none;
  column-count: 2;
  column-fill: balance;
  margin-bottom: 40px;

  input {
    margin: 9px;
    z-index: 10;
    border: 1px solid var(--bg-secondary);
  }
`;

export const CheckboxBg = styled.div`
  background-color: #d4ede4;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const Description = styled.div`
  & input {
    margin-top: 0;
  }
`;
