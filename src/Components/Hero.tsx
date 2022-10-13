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
  width: 100%;
  height: 97vh;
  background-color: rgba(3, 90, 75, 0.85);
`;

const Image = styled.div`
  background-image: url("images/hammering-roof.jpg");
  background-size: 120%;
  background-repeat: no-repeat;
  filter: brightness(190%);
  width: 100%;
  height: 97vh;
`;
