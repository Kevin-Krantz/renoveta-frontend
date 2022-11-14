import { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";
import Input from "../../common/Input";
// import { Link } from "react-router-dom";

function BoxRight() {
  const [input, setInput] = useState("kvm");
  const [options, setOptions] = useState([]);

  const data = [
    { id: 1, name: "Takomläggning" },
    { id: 2, name: "Takrenovering" },
    { id: 3, name: "Takbyte" },
  ];

  const takData = [
    { id: 1, name: "Plåt" },
    { id: 2, name: "Papp" },
    { id: 3, name: "Eternit" },
    { id: 4, name: "Tegelpannor" },
  ];

  const handleChange = (item: any) => {
    let selectedOption = options;
    if (selectedOption.some((option: any) => option.id === item.id)) {
      selectedOption = selectedOption.filter(
        (option: any) => option.id !== item.id
      );
    } else {
      //@ts-ignore
      selectedOption.push(item);
    }
    setOptions(selectedOption);
  };

  return (
    <Right>
      <div>
        <a>1. Vad är det för typ av renovering?</a>
        <span>
          {data.map((option) => {
            return (
              <StyledCheckBox>
                <Checkbox
                  className="checkbox-input"
                  key={option.id}
                  id={option.id}
                  //@ts-ignore
                  handleCheck={() => {
                    handleChange(option);
                  }}
                  name={option.name}
                />
              </StyledCheckBox>
            );
          })}
        </span>
      </div>
      <div>
        <a>2. Vilket material består ditt tak av?</a>
        <span>
          {takData.map((option) => {
            return (
              <StyledCheckBox>
                <Checkbox
                  className="checkbox-input"
                  key={option.id}
                  id={option.id}
                  //@ts-ignore
                  handleCheck={() => {
                    handleChange(option);
                  }}
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
            onChange={(event) => setInput(event.target.value)}
          />
        </a>
      </div>
      <End>
        <Button
          primary={false}
          type="submit"
          label={"Jag vill veta mer om renoveta"}
        />
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

const End = styled.div`
  padding-left: 20%;

  p {
    font-style: bold;
    font-weight: 700;
    font-size: 14;
    padding-left: 21;
  }
`;
