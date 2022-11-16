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
  margin-left: 100px;

  img {
    width: 500px;
    height: 550px;
  }

  @media screen and (max-width: 880px) {
    margin-left: 10px;

    img {
      width: 300px;
      height: 350px;
    }
  }
`;
