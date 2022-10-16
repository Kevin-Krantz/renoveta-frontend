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
  grid-template-columns: 50% 50%;
  text-align: left;
  color: var(--text-primary);
`;

const Image = styled.div`
  background-image: url("images/hero_renoveta.png");
  background-size: 120%;
  background-repeat: no-repeat;
`;
