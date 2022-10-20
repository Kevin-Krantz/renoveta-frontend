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
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: space-evenly;
`;

const Left = styled.span`
  grid-column: 1;
`;

const Right = styled.span`
  grid-column: 2;
`;
