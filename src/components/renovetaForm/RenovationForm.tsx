import styled from 'styled-components';

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
    return (
      <>
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


