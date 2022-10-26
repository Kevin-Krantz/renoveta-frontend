import styled from "styled-components";
import Elin from "./Elin";
import Maximillian from "./Maximillian";
import Linus from "./Linus";
import Sofia from "./Sofia";

function AboutUs() {
  return (
    <Wrapper>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <Linus />
      <Elin />
      <Maximillian />
      <Sofia />
      <End>
        <img src="images\pink-rectangle-right.png" />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </End>
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  display: grid;
  height: 600vh;
  width: 100%;
  color: var(--text-secondary);
  position: relative;
  p {
    text-align: center;
    margin: 0 !important;
    display: inline-block;
  }
`;

const End = styled.div`
  position: relative;
  text-align: left;

  img {
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 100%;
  }

  p {
    position: absolute;
    top: 100px;
    left: 8px;
  }
`;
