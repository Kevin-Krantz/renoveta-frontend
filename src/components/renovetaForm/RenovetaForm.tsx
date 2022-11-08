import { useMultistepForm} from "./useMultistepForm";
import styled from "styled-components";
import { RenovationForm } from "./RenovationForm";
import {FormEvent, useState} from 'react';
import { PropertyForm } from "./PropertyForm";
import { QuestionForm } from "./QuestionForm";
import { PersonalInfoForm } from "./PersonalInfoForm";
import BoxLeft from "../calculator/BoxLeft";



type FormData ={
    typeOfRenovation: string
    changeApperance: string
    roofType: string
    materialType: string
    roofAngle: string
    propertyWidth: string
    propertyLength: string
    anyQuestions: string
    addImg: string
    email: string
    phone: string
    firstName: string
    lastName: string
    address: string
    propertyName: string
    city: string
}

const INITIAL_DATA: FormData = {
    typeOfRenovation: "",
    changeApperance: "",
    roofType: "",
    materialType: "",
    roofAngle: "",
    propertyWidth: "",
    propertyLength: "",
    anyQuestions: "",
    addImg: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    propertyName: "",
    city: "",
}

function RenovetaForm() {

const [data,setData] = useState(INITIAL_DATA);

function updateFields(fields: Partial<FormData>){
    setData( prev => {
        return {...prev, ...fields}
    })
}
const {
    step,
    steps, 
    currentStepIndex, 
    isFirstStep,
    isLastStep, 
    previousStep,  
    nextStep} 
    = useMultistepForm([
        <RenovationForm {...data} updateFields={updateFields} />,
        <PropertyForm {...data} updateFields={updateFields} />,
        <QuestionForm {...data} updateFields={updateFields} />,
        <PersonalInfoForm {...data} updateFields={updateFields} />

    ]);

    function onSubmit( e: FormEvent) {
        e.preventDefault();
        if(!isLastStep) return nextStep();

    }


    return (
        <Container>
            <Box>
                <BoxLeft></BoxLeft>
              <Right>
                <Form onSubmit={onSubmit}>
                <div>{currentStepIndex + 1}/ {steps.length}</div>
                {step}
                <div>
                    {!isFirstStep && 
                    <button type="button" onClick={previousStep}>
                        Tillbaka
                        </button>}

                    <button type="button" onClick={nextStep}>
                        {isLastStep ? "Skicka" : "Nästa"}
                        </button>
                </div>
            </Form>
            
            </Right>
            </Box>
        </Container>
    );
}

export default RenovetaForm;

const Container = styled.div`
  display: grid;
  color: var(--text-secondary);
  text-align: center;
`;

const Form = styled.form `
height: 70vh;
width: 80%;
display: grid;
justify-content: space-between;
align-items: center;

input{
    border-radius: 25px;
}

`
const Box = styled.span`
  display: flex;
  justify-content: center;
  text-align: left;
  width: 80%;
  left: 10%;
  position: relative;
  padding-bottom: 32px;
  font-size: 18px;
`;
const Right = styled.span `
width: 55%;
  display: grid;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  border: 5px solid var(--bg-secondary);
  padding-left: 72px;
  line-height: 28px;
  `
