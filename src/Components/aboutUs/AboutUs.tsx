import styled from "styled-components";
import FirstAboutUs from "./FirstAboutUs";
import SecondAboutUs from "./SecondAboutUs";

function AboutUs() {
  return (
    <Wrapper>
      <FirstAboutUs />
      <SecondAboutUs />
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  display: grid;
  background-color: var(--bg-secondary);
`;
