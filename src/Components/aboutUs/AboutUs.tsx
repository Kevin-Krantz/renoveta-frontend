import styled from "styled-components";
import Elin from "./Elin";
import Maximillian from "./Maximillian";
import Linus from "./Linus";
import Sofia from "./Sofia";

function AboutUs() {
  return (
    <Wrapper>
      <h1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </h1>
      <Linus />
      <Elin />
      <Maximillian />
      <Sofia />
      <h1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </h1>
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  display: grid;
  height: 500vh;
  width: 100%;
  h1 {
    text-align: center;
  }
`;
