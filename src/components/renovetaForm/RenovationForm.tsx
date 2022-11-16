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
        {id: 1, name: "Takomläggning", isChecked: false},
        {id: 2, name: "Måla", isChecked: false},
        {id: 3, name: "Tvätt", isChecked: false},
];

const [options, setOptions] = useState([]); 
//@ts-ignore
const handleChange =(event) => {
/*
  let selectedOption = options;
  if(selectedOption.some((option) => option.id === item.id)) {
    selectedOption = selectedOption.filter((option:any) => option.id !== item.id);
  } else {
   
    selectedOption.push(item);
  }
  setOptions(selectedOption);
  */

//@ts-ignore
  const selected = [...options];
  //@ts-ignore
  selected[index]={...selected[index], isChecked: event.target.checked}
  setOptions([...selected])
     }
   
    return (
      <>
     
    <label>Vad för typ av renovering planerar du på att utföra?</label>
    <CheckboxContainer>
        {data.map((option,index)=>{ 
            return (
             <CheckboxBg> 
                    <Checkbox
                    className='checkbox-input'
                    key={option.id}
                    id={option.id}
                    isChecked={option.isChecked}
                    //@ts-ignore
                    handleCheck = {(event) => { 
                      handleChange(event) 
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
          placeholder="Om Ja, beskriv vad du ska ändra på din bostad"
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


 


