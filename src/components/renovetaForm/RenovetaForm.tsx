import { useMultistepForm } from "./useMultistepForm";
import styled from "styled-components";
import { RenovationForm } from "./RenovationForm";
import { FormEvent, useState } from "react";
import { PropertyForm } from "./PropertyForm";
import { QuestionForm } from "./QuestionForm";
import { PersonalInfoForm } from "./PersonalInfoForm";
import BoxLeft from "../../HomePage/components/calculator/BoxLeft";
import RegisterForm from "../../HomePage/RegisterForm";
import { postForm } from "../../services/formService";
import userService from "../../services/userService";

type FormData = {
  renovationType: string;
  changeApperance: string;
  typeOfRoof: string;
  roofMaterial: string;
  roofAngle: string;
  propertyWidth: string;
  propertyLength: string;
  questions: string;
  addImg: string;
  email: string;
  phone: string;
  userId: string;
  name: string;
  password: string;
  streetAdressAndNumber: string;
  propertyDesignation: string;
  city: string;
};

const INITIAL_DATA: FormData = {
  renovationType: "",
  changeApperance: "",
  typeOfRoof: "",
  roofMaterial: "",
  roofAngle: "",
  propertyWidth: "",
  propertyLength: "",
  questions: "",
  addImg: "",
  email: "",
  phone: "",
  userId: "",
  name: "",
  password: "",
  streetAdressAndNumber: "",
  propertyDesignation: "",
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLastStep) return nextStep();

    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const dbUser: any = await userService.register(user);
    data.userId = dbUser._id;
     postForm(data);
  }

  

  return (
    <Container>
      <Box>
        <BoxLeft></BoxLeft>

        <Right>
          <Form onSubmit={onSubmit}>
            <div>
              {currentStepIndex + 1}/{steps.length}
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
  height: 100vh;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  .form-input {
    border-radius: 10px;
    height: 45px;
    border: 3px solid;
    border-color: var(--text-secondary);
    margin-top: 20px;
    padding: 8px 16px;
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
  padding-left: 24px;
  padding-right: 24px;
  line-height: 28px;
  position: relative;
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
const Button = styled.button`
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
`;
