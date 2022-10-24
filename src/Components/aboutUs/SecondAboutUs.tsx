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
  margin-left: 10%;
  height: auto;
  background-size: 75%;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-items: end;
`;

const Left = styled.span`
  grid-column: 1;
  height: auto;
  width: 80%;
  margin-left: 32px;
`;

const Right = styled.span`
  grid-column: 2;
  height: auto;
  width: 80%;
`;
