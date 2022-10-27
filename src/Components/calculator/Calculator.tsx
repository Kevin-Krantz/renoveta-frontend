import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Calculator() {
  const [input, setInput] = useState("kvm");

  return (
    <Image>
      <Container>
        <h1>Testa Renoveta kalkylen</h1>
        <p>
          Undrar du vad din renovering kommer att kosta, <br /> behövs kanske
          bygglov och hur är det egentligen med rot-avdrag?
        </p>
        <Box>
          <Left>
            <Logo src="logo\renoveta-logo--mint-symbol-2160.png" />
            <h1>Vad Kommer din renovering att kosta?</h1>
            <p>
              Med vår kalkyl får du en uppskattning på kostnaden av ditt
              projekt. Önskar du få fler uppgifter vad som gäller?
              <br />
              <br />
              Registrera dina uppgifter, och få tillgång till hela vår tjänst.
            </p>
            <ul>
              <li>Prisindikation </li>
              <li>Skräddarsytt avtal </li>
              <li>Regel-koll</li>
            </ul>
            <Button primary={true} type="submit" label={"Registrera dig"} />
          </Left>
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
        </Box>
      </Container>
    </Image>
  );
}

export default Calculator;

const Image = styled.div`
  background-image: url("images/bg-photo-paint.png");
  background-size: 180%;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  color: var(--text-secondary);
  text-align: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 10%;
  top: 8px;
  left: 48px;
`;

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

const Left = styled.span`
  width: 45%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 5px solid var(--bg-secondary);
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  padding-left: 72px;
  padding-top: 72px;
  padding-bottom: 72px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-weight: 600;
  }
  ul {
    font-weight: 500;
  }
`;

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
