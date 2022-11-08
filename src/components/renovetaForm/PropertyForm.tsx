type PropertyData = {
    roofType: string
    materialType: string
    roofAngle: string
    propertyWidth: string
    propertyLength: string
   }
   
   type PropertyFormProps = PropertyData & {
     updateFields: (fields: Partial<PropertyData>) => void
   }
   
   export function PropertyForm({
    roofType,
    materialType,
    roofAngle,
    propertyWidth,
    propertyLength,
     updateFields,
   }: PropertyFormProps) {
     return (
       <>
       <label>Vilken typ av tak har du idag?</label>
         <input
           type="text"
           value={roofType}
           onChange={e => updateFields({ roofType: e.target.value })}
         />
         <label>Vilket material består ditt tak av idag?</label>
         <input
           placeholder="Beskriv vad du ska ändra på din bostad"
           type="text"
           value={materialType}
           onChange={e => updateFields({ materialType: e.target.value })}
         />
          <label>Vad är husets takvinkel?</label>
         <input
           type="text"
           value={roofAngle}
           onChange={e => updateFields({ roofAngle: e.target.value })}
         />
        <label>Vad är måtten på din bostad?</label>
         <input
           type="text"
           value={propertyLength}
           onChange={e => updateFields({ propertyLength: e.target.value })}
         />
         <input
           type="text"
           value={propertyWidth}
           onChange={e => updateFields({ propertyWidth: e.target.value })}
         />
         
   </>
     )
   }