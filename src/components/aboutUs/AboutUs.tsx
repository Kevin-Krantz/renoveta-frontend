import styled from "styled-components";
import Elin from "./Elin";
import Maximillian from "./Maximillian";
import Linus from "./Linus";
import Sofia from "./Sofia";
import End from "./End";
import Intro from "./Intro";

function AboutUs() {
  return (
    <Wrapper>
      <Intro />
      <Linus />
      <Elin />
      <Maximillian />
      <Sofia />
      <End />
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 300px 300px 300px 300px 600px;
  color: var(--text-secondary);
  position: relative;
`;
