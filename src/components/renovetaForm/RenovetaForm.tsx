import { useMultistepForm } from "./useMultistepForm";
import styled from "styled-components";
import { RenovationForm } from "./RenovationForm";
import { FormEvent, useState } from "react";
import { PropertyForm } from "./PropertyForm";
import { QuestionForm } from "./QuestionForm";
import { PersonalInfoForm } from "./PersonalInfoForm";
<<<<<<< HEAD
import BoxLeft from "../../HomePage/components/calculator/BoxLeft";
=======
import BoxLeft from "../firstPage/calculator/BoxLeft";
>>>>>>> master

type FormData = {
  typeOfRenovation: string;
  changeApperance: string;
  roofType: string;
  materialType: string;
  roofAngle: string;
  propertyWidth: string;
  propertyLength: string;
  anyQuestions: string;
  addImg: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  propertyName: string;
  city: string;
};

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
};

function RenovetaForm() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    step,
    steps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
  } = useMultistepForm([
    <RenovationForm {...data} updateFields={updateFields} />,
    <PropertyForm {...data} updateFields={updateFields} />,
    <QuestionForm {...data} updateFields={updateFields} />,
    <PersonalInfoForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextStep();
  }

  return (
    <Container>
      <Box>
        <BoxLeft></BoxLeft>

        <Right>
          <Form onSubmit={onSubmit}>
            <div>
              {currentStepIndex + 1}/ {steps.length}
            </div>
            {step}
            <ButtonContainer>
              {!isFirstStep && (
                <Button
                  className="secondary"
                  type="button"
                  onClick={previousStep}
                >
                  Tillbaka
                </Button>
              )}

              <Button type="submit">{isLastStep ? "Skicka" : "Nästa"}</Button>
            </ButtonContainer>
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
  width: 100vw;
  height: 180vh;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;

  .form-input {
    border-radius: 10px;
    height: 45px;
    border: 3px solid;
    border-color: var(--text-secondary);
    margin-top: 20px;
  }
  .form-input-small {
    height: 35px;
    width: 250px;
    border-radius: 10px;
  }
`;
const Box = styled.span`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: left;
  width: 60%;
  height: 75%;
  position: relative;
  padding-bottom: 32px;
  font-size: 18px;
  margin: 0 auto;
`;
export const Right = styled.span`
  width: 100%;
  padding-top: 40px;
  display: grid;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  border: 5px solid var(--bg-secondary);
  padding-left: 72px;
  line-height: 28px;
  position: relative;
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
const Button = styled.button`
<<<<<<< HEAD
  font-weight: 600;
  font-family: "Catamaran";
  width: 150px;
  height: 40px;
  margin-left: 15px;
  border-radius: 45px;
  border: 2px solid var(--bg-color);
  background-color: var(--bg-color);
  color: var(--text-primary);
  cursor: pointer;

  &.secondary {
    background-color: #ffffff;
    border: 3px solid var(--bg-color);
    color: var(--bg-color);
  }

  :hover {
    transform: scale(1.03);
  }

  :active {
    transform: scale(1);
  }
=======
   font-weight: 600;
   font-family: 'Catamaran';
    width: 150px;
    height: 40px;
    margin-left: 15px;
    border-radius: 45px;
    border: 2px solid var(--bg-color);
    background-color: var(--bg-color);
    color: var(--text-primary);
    cursor: pointer;

    &.secondary {
        background-color: #ffffff ;
        border: 3px solid var(--bg-color);
        color: var(--bg-color);
        
    }
}
  
    :hover {
      transform: scale(1.03);
    }
  
    :active {
      transform: scale(1);
    }
>>>>>>> master
`;
