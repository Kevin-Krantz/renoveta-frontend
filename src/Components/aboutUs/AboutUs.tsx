import styled from "styled-components";
import Elin from "./Elin";
import Maximillian from "./Maximillian";
import Linus from "./Linus";
import Sofia from "./Sofia";

function AboutUs() {
  return (
    <Wrapper>
      <h1> Renoveta är.............</h1>
      <Linus />
      <Elin />
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
