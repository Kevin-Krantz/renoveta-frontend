import styled from "styled-components";

function HeroRight() {
  return (
    <Container>
      <img src="/images/video_renoveta.png" />
    </Container>
  );
}

export default HeroRight;
const Container = styled.div`
  margin-right: 10%;

  img {
    width: 140%;
    height: 100%;
  }
`;
