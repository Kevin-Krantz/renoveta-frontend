import styled from "styled-components";
import Sofia from "../aboutUs/Sofia";
import Maximillian from "../aboutUs/Maximillian";

function SecondAboutUs() {
  return (
    <Background>
      <Left>
        <Sofia />
      </Left>
      <Right>
        <Maximillian />
      </Right>
    </Background>
  );
}

export default SecondAboutUs;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  background-color: var(--bg-tertiary);
  border-bottom-left-radius: 180px;
  border-top-left-radius: 180px;
  background-size: 75%;
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
