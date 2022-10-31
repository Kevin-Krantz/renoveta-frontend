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
  grid-template-columns: 60% 40%;
  text-align: left;
  color: var(--text-primary);
  margin-bottom: 5%;
`;

const Image = styled.div`
  background-image: url("images/hero_renoveta.png");
  background-size: 180%;
  width: 90%;
  border-top-right-radius: 375px;
  border-bottom-right-radius: 375px;
`;
