import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Checkbox from '../common/Checkbox';
import {useState} from 'react';
import Right from './RenovetaForm';




type RenovationData = {
   typeOfRenovation: string
   changeApperance: string
  }
  
  type RenovationFormProps = RenovationData & {
    updateFields: (fields: Partial<RenovationData>) => void
  }

export function RenovationForm({
    typeOfRenovation,
    changeApperance,
    updateFields,
  }: RenovationFormProps) {

  const data = [
        {id: 1, name: "Plåtarbete" },
        {id: 2, name: "Takomläggning"},
        {id: 3, name: "Takrenovering"},
        {id: 4, name: "Takbyte"},
        {id: 5, name: "Taktvätt" },
        {id: 6, name: "Annat" },
];

const [options, setOptions] = useState([]); 
//@ts-ignore
const handleChange =(item:any) => {
  let selectedOption = options;
  if(selectedOption.some((option:any) => option.id === item.id)) {
    selectedOption = selectedOption.filter((option:any) => option.id !== item.id);
  } else {
    //@ts-ignore
    selectedOption.push(item);
  }
  setOptions(selectedOption);
     }
   
    return (
      <>
    <label>Vad för typ av renovering planerar du på att utföra?</label>
    <CheckboxContainer>
        {data.map((option)=>{ 
            return (
             <CheckboxBg> 
                    <Checkbox
                    className='checkbox-input'
                    key={option.id}
                    id={option.id}
                    //@ts-ignore
                    handleCheck = {() => { 
                      handleChange(option) 
                    }}
                    name={option.name}
                    />
                    </CheckboxBg>
            )
        })}
      
  </CheckboxContainer>

        <label>Planerar du på att ändra - färg, material eller form?</label>
        <input
          className='form-input'
          placeholder="Beskriv vad du ska ändra på din bostad"
          type="text"
          value={changeApperance}
          onChange={e => updateFields({ changeApperance: e.target.value })}
        />
</>
    )
 
  }



  export const CheckboxContainer = styled.ul `
  list-style: none;
  column-count: 2;
  column-fill: balance;


  input {
    margin: 9px;
    z-index: 10;
    border: 1px solid var(--bg-secondary);
}
  `
  
  export const CheckboxBg = styled.div `
  background-color: #D4EDE4;
  margin-bottom: 5px;
  border-radius: 5px;

  `

 


