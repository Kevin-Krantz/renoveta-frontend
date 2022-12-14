import { useState } from "react";
import styled from "styled-components";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";
import Input from "../../../common/Input";
import { Link } from "react-router-dom";
import Questionmark from "../../../common/Questionmark";
import { ScrollToTop } from "../../../common/ScrollToTop";

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
      id: "1",
      name: MaterialType.SHEET_METAL,
      [RenovationType.REROOFING]: 1150,
      [RenovationType.PAINTING]: 350,
      [RenovationType.CLEANING]: 180,
    },
    {
      id: "2",
      name: MaterialType.PAPER,
      [RenovationType.REROOFING]: 750,
      [RenovationType.PAINTING]: 350,
      [RenovationType.CLEANING]: 180,
    },
    {
      id: "3",
      name: MaterialType.ETHERNITE,
      [RenovationType.REROOFING]: 1850,
      [RenovationType.PAINTING]: 350,
      [RenovationType.CLEANING]: 180,
    },
    {
      id: "4",
      name: MaterialType.BRICK_SHEETS,
      [RenovationType.REROOFING]: 1500,
      [RenovationType.PAINTING]: 350,
      [RenovationType.CLEANING]: 180,
    },
    {
      id: "5",
      name: MaterialType.CONCRETE_SHEETS,
      [RenovationType.REROOFING]: 1200,
      [RenovationType.PAINTING]: 350,
      [RenovationType.CLEANING]: 180,
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
      "Är ditt tak från 1950-1980 rekommenderas oftas en omläggning. Kontakta företag för kontroll av tak. Är taket från 1990 eller senare kan det räcka med en tvätt och målning",
    questionTwo: "Vad är det för befintligt material på taket?",
    questionThree:
      "För att enklast få ut takets yta i kvm så tar ni längden på huset (längst med takfoten) och gångar det med måttet från takfot till nock. Det måttet får ni fram om ni tar antal pannor gånger 35) så har ni 15 pannrader på taket är måttet 5,25m.",
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
        <Link onClick={ScrollToTop} to="/renovetaform">
          <Button
            className="button"
            primary={false}
            type="submit"
            label={"Kom igång!"}
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
  margin-bottom: 20px;
`;
