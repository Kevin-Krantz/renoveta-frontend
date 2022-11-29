import { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import Questionmark from "../../common/Questionmark";

enum RenovationType {
  REROOFING = "Takomläggning",
  PAINTING = "Målning",
  CLEANING = "Tvätt",
}

enum MaterialType {
  DEFAULT = "",
  SHEET_METAL = "Plåt",
  PAPER = "Papp/Shingel",
  ETHERNITE = "Eternit",
  BRICK_SHEETS = "Tegelpannor",
  CONCRETE_SHEETS = "Betongpannor",
}

function BoxRight() {
  const [input, setInput] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<RenovationType | "">("");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType | "">(
    ""
  );

  interface Data {
    id: string;
    name: MaterialType;
    [RenovationType.REROOFING]: number;
    [RenovationType.PAINTING]: number;
    [RenovationType.CLEANING]: number;
  }

  const data: Data[] = [
    {
      id: "10",
      name: MaterialType.SHEET_METAL,
      [RenovationType.REROOFING]: 1150,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "20",
      name: MaterialType.PAPER,
      [RenovationType.REROOFING]: 750,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "30",
      name: MaterialType.ETHERNITE,
      [RenovationType.REROOFING]: 1850,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "40",
      name: MaterialType.BRICK_SHEETS,
      [RenovationType.REROOFING]: 1500,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "50",
      name: MaterialType.CONCRETE_SHEETS,
      [RenovationType.REROOFING]: 1200,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
  ];

  function getTotalPrice() {
    let total = 0;

    const material = data.find((item) => item.name === selectedMaterial);

    if (!material) return total;

    total += material[selectedType as RenovationType] * input;

    return total;
  }

  interface TextQuestions {
    questionOne: string;
    questionTwo: string;
    questionThree: string;
  }

  const text: TextQuestions = {
    questionOne:
      "Takrenovering är ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    questionTwo: "Material till ditt tak ...",
    questionThree: "Räkna ut ditt tak area..",
  };

  return (
    <Right>
      <div>
        <QuestionContainer>
          <a>1. Vad är det för typ av takrenovering?</a>
          <Questionmark text={text.questionOne} />
        </QuestionContainer>

        <span>
          {Object.values(RenovationType).map((option, i) => {
            return (
              <StyledCheckBox key={i}>
                <Checkbox
                  className="checkbox-input"
                  key={i}
                  id={i.toString()}
                  checked={option === selectedType}
                  handleCheck={(e) =>
                    setSelectedType(e.target.name as RenovationType)
                  }
                  name={option}
                  type="radio"
                />
              </StyledCheckBox>
            );
          })}
        </span>
      </div>
      <div>
        <QuestionContainer>
          <a>2. Vilket material består ditt tak av?</a>
          <Questionmark text={text.questionTwo} />
        </QuestionContainer>

        <span>
          {data.map((option) => {
            return (
              <StyledCheckBox key={option.id}>
                <Checkbox
                  className="checkbox-input"
                  key={option.id}
                  id={option.id.toString()}
                  checked={option.name === selectedMaterial}
                  handleCheck={(e) =>
                    setSelectedMaterial(e.target.name as MaterialType)
                  }
                  name={option.name}
                  type="radio"
                />
              </StyledCheckBox>
            );
          })}
        </span>
      </div>
      <div>
        <QuestionContainer>
          <a>3. Hur stort är ditt tak i kvm?</a>
          <Questionmark text={text.questionThree} />
        </QuestionContainer>

        <Input
          className="input"
          value={input}
          name="kvm"
          type="text"
          onChange={(e) => setInput(Number(e.target.value))}
        />
      </div>
      <End>
        <a>{getTotalPrice()}kr</a>
        <p>Prisindikation redovisas med arbete och material</p>
        <Link to="/renovetaform">
          <Button
            className="button"
            primary={false}
            type="submit"
            label={"Börja Renoveta"}
          />
        </Link>
      </End>
    </Right>
  );
}

export default BoxRight;

const Right = styled.span`
  width: 650px;
  display: grid;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  border: 5px solid var(--bg-secondary);
  padding-left: 72px;
  line-height: 28px;
  padding-top: 50px;

  a {
    font-size: 25px;
    font-weight: 700;
    font-style: bold;
    text-align: left;
  }

  input {
    border: 1.5px solid var(--bg-secondary) !important;
  }

  span {
    display: grid;
    grid-template-columns: auto auto;
    margin: 10px;
  }

  @media screen and (max-width: 1000px) {
    width: 450px;
    font-size: 12px;
    padding-top: 20px;
    padding-left: 32px;
    padding-bottom: 35px;

    a {
      font-size: 16px;
    }

    .button {
      width: 120px;
      height: 30px;
    }
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const StyledCheckBox = styled.div`
  width: 150px;
  margin-bottom: 5px;
  border-radius: 5px;

  .checkbox-input {
    margin-right: 5px;
  }
`;

const End = styled.div`
  text-align: center;
`;
