import styled from "styled-components";
import Elin from "../aboutUs/Elin";
import Linus from "../aboutUs/Linus";
import Sofia from "../aboutUs/Sofia";
import Maximillian from "../aboutUs/Maximillian";

function AboutUs() {
  return (
    <Wrapper>
      <Elin />
      <Linus />
      <Sofia />
      <Maximillian />
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 25%);
  background-color: var(--bg-tertiary);
`;
