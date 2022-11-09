import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Checkbox from '../common/Checkbox';
import {useState} from 'react';

type RenovationData = {
   typeOfRenovation: string
   changeApperance: string
  }
  
  type RenovationFormProps = RenovationData & {
    updateFields: (fields: Partial<RenovationData>) => void
  }
/*
  const renovationTypes = [
    {id: 1, value: "Plåtarbete", iChecked: false },
    {id: 2, value: "Takomläggning", isChecked: false },
    {id: 3, value: "Takrenovering", isChecked: false },
    {id: 4, value: "Takbyte", isChecked: false },
    {id: 5, value: "Taktvätt", isChecked: false },
    {id: 6, value: "Annat", isChecked: false },

  ]
  */
export function RenovationForm({
    typeOfRenovation,
    changeApperance,
    updateFields,
  }: RenovationFormProps) {


const [type, setTypes] = useState([
{id: 1, value: "Plåtarbete", iChecked: false },
{id: 2, value: "Takomläggning", isChecked: false },
{id: 3, value: "Takrenovering", isChecked: false },
{id: 4, value: "Takbyte", isChecked: false },
{id: 5, value: "Taktvätt", isChecked: false },
{id: 6, value: "Annat", isChecked: false },

]);
    
const handleCheck=(event:any) =>{
        let renovationTypes = [...type];
        
        renovationTypes.map(type => {
            if(type.value === event.currentTarget.value) {
                type.isChecked = event.currentTarget.checked;
                
            }
        })
        setTypes(renovationTypes)
        
    }
    
   
    return (
      <>
      <CheckboxContainer>
        {type.map((type)=>{
            return (
                <li key={type.id}>
                    <Checkbox
                    id={type.id}
                    handleCheck = {handleCheck}
                    isChecked={type.isChecked}
                    value={type.value}
                    />
                </li>
            )
        })}
      </CheckboxContainer>




      <label>Vad för typ av renovering planerar du på att utföra?</label>
        <input
          type="text"
          value={typeOfRenovation}
          onChange={e => updateFields({ typeOfRenovation: e.target.value })}
        />
        <label>Planerar du på att ändra - färg, material eller form?</label>
        <input
          placeholder="Beskriv vad du ska ändra på din bostad"
          type="text"
          value={changeApperance}
          onChange={e => updateFields({ changeApperance: e.target.value })}
        />
        
  </>
    )
  }
  const CheckboxContainer = styled.ul `
  list-style: none;
  display: grid;
  `


