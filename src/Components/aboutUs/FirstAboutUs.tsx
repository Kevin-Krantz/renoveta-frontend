import styled from "styled-components";
import Elin from "../aboutUs/Elin";
import Linus from "../aboutUs/Linus";

function FirstAboutUs() {
  return (
    <Background>
      <Left>
        <Elin />
      </Left>
      <Right>
        <Linus />
      </Right>
    </Background>
  );
}

export default FirstAboutUs;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  background-color: var(--bg-tertiary);
  border-bottom-right-radius: 180px;
  border-top-right-radius: 180px;
  width: 90%;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-items: start;
`;

const Left = styled.span`
  grid-column: 1;
  height: auto;
  width: 80%;
  margin-left: 16px;
`;

const Right = styled.span`
  grid-column: 2;
  height: auto;
  width: 80%;
  margin-right: 64px;
`;
