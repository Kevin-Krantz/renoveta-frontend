import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
// import { Link } from "react-router-dom";

function BoxRight() {
  const [input, setInput] = useState("kvm");
  return (
    <Right>
      <div>
        <p>1. Vad är det för typ av renovering?</p>
      </div>
      <div>
        <p>
          2. Hur stort är ditt tak i kvm?{" "}
          <Input
            className="input"
            value={input}
            name="kvm"
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
        </p>
      </div>
      <div>
        <p>3. Vilket material består ditt tak av?</p>
      </div>
      <p>4. Preferenser</p>
      <End>
        <Button primary={false} type="submit" label={"Beräkna"} />
        <p>Jag vill veta mer om renoveta</p>
        {/* <Link to={"/aboutus"}>Jag vill veta mer om renoveta</Link> */}
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

  p {
    font-size: 25px;
    font-weight: 700;
    font-style: bold;
    text-align: left;
  }

  input {
    border: 1.5px solid var(--bg-secondary) !important;
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
