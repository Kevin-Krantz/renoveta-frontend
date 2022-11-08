type QuestionData = {
    anyQuestions: string
    addImg: string
   }
   
   type QuestionFormProps = QuestionData & {
     updateFields: (fields: Partial<QuestionData>) => void
   }
   
   export function QuestionForm({
    anyQuestions,
    addImg,
     updateFields,
   }: QuestionFormProps) {
     return (
       <>
       <label>Vad för typ av renovering planerar du på att utföra?</label>
         <input
           type="text"
           value={anyQuestions}
           onChange={e => updateFields({ anyQuestions: e.target.value })}
         />
         <label>Planerar du på att ändra - färg, material eller form?</label>
         <input
           placeholder="Beskriv vad du ska ändra på din bostad"
           type="text"
           value={addImg}
           onChange={e => updateFields({ addImg: e.target.value })}
         />
         
   </>
     )
   }