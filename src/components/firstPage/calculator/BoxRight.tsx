import { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";
import Input from "../../common/Input";
import { Link } from "react-router-dom";

type Checked<T> = {
  [Property in keyof T]?: boolean;
};

enum RenovationType {
  REROOFING = "Takomläggning",
  PAINTING = "Målning",
  CLEANING = "Tvätt",
}

enum MaterialType {
  SHEET_METAL = "Plåt",
  PAPER = "Papp/Shingel",
  ETHERNITE = "Eternit",
  BRICK_SHEETS = "Tegelpannor",
  CONCRETE_SHEETS = "Betongpannor",
}

function BoxRight() {
  const [input, setInput] = useState<number>(0);
  const [checked, setChecked] = useState<{ [key in RenovationType]?: boolean }>(
    {}
  );
  const [isChecked, setIsChecked] = useState<{
    [key in MaterialType]?: false;
  }>({});

  const data = [
    {
      id: "1",
      name: MaterialType.SHEET_METAL,
      [RenovationType.REROOFING]: 1150,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "2",
      name: MaterialType.PAPER,
      [RenovationType.REROOFING]: 750,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "3",
      name: MaterialType.ETHERNITE,
      [RenovationType.REROOFING]: 1850,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "4",
      name: MaterialType.BRICK_SHEETS,
      [RenovationType.REROOFING]: 1500,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
    {
      id: "5",
      name: MaterialType.CONCRETE_SHEETS,
      [RenovationType.REROOFING]: 1200,
      [RenovationType.PAINTING]: 100,
      [RenovationType.CLEANING]: 100,
    },
  ];

  const handleChecked = (item: any) => {
    if (item === Object.values(RenovationType)) return (item = true);
    setChecked(item);
  };

  const handleCheck = (item: any) => {
    if (item === Object.values(MaterialType)) return (item = true);
    setIsChecked(item);
  };

  function getTotalPrice() {
    // let total = 0;
    // const formData = data;
    // return total;
  }

  return (
    <Right>
      <div>
        <a>1. Vad är det för typ av takrenovering?</a>
        <span>
          {Object.values(RenovationType).map((option, i) => {
            return (
              <StyledCheckBox key={i}>
                <Checkbox
                  className="checkbox-input"
                  key={i}
                  id={i.toString()}
                  // checked={checked}
                  //@ts-ignore
                  handleCheck={handleChecked}
                  name={option}
                />
              </StyledCheckBox>
            );
          })}
        </span>
      </div>
      <div>
        <a>2. Vilket material består ditt tak av?</a>
        <span>
          {data.map((option) => {
            return (
              <StyledCheckBox key={option.id}>
                <Checkbox
                  className="checkbox-input"
                  key={option.id}
                  id={option.id}
                  // checked={isChecked}
                  //@ts-ignore
                  handleCheck={handleCheck}
                  name={option.name}
                />
              </StyledCheckBox>
            );
          })}
        </span>
      </div>
      <div>
        <a>
          3. Hur stort är ditt tak i kvm?
          <Input
            className="input"
            value={input}
            name="kvm"
            type="text"
            onChange={(e) => setInput(Number(e.target.value))}
          />
        </a>
      </div>
      <TotalaPris>{}kr</TotalaPris>
      <End>
        <Link to="/renovetaform">
          <Button primary={false} type="submit" label={"Börja Renoveta"} />
        </Link>
      </End>
    </Right>
  );
}

export default BoxRight;

const Right = styled.span`
  width: 55%;
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
`;

const StyledCheckBox = styled.div`
  width: 150px;
  margin-bottom: 5px;
  border-radius: 5px;

  .checkbox-input {
    margin-right: 5px;
  }
`;

const TotalaPris = styled.a`
  text-align: center !important;
`;

const End = styled.div`
  padding-left: 20%;

  p {
    font-style: bold;
    font-weight: 700;
    font-size: 14;
    padding-left: 21;
  }
`;
