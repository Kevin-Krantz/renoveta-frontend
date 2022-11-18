import React from "react";
import styled from "styled-components";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <Image>
      <Container>
        <HeroLeft />
        <HeroRight />
      </Container>
    </Image>
  );
}

export default Hero;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 500px;
  grid-template-rows: 450px;
  text-align: left;
  color: var(--text-primary);
  margin-bottom: 5%;

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }
`;

const Image = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(130, 198, 173, 0.9),
      rgba(130, 198, 173, 0.9)
    ),
    url("images/hero_renoveta.png");
  background-size: 1100px;
  background-repeat: none;
  width: 1100px;
  border-top-right-radius: 375px;
  border-bottom-right-radius: 375px;
`;
