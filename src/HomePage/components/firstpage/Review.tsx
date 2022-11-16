import { x } from "joi";
import styled from "styled-components";

function Review() {
  return (
    <Container>
      <MainContainer>
        <HeadingText>Vad säger våra kunder</HeadingText>
        <ContentContainer>
          <LeftContainer>
            <img src="/images/renovetaReviews.png" />
          </LeftContainer>
          <RightContainer>
            <StarContainer>
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
              <img src="/images/star.png" />
            </StarContainer>
            <TextContainer>
              <p>
                "Utan Renoveta hade jag aldrig haft koll på vad som gäller för
                min renovering - John"
              </p>
            </TextContainer>
          </RightContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default Review;

const Container = styled.div`
  height: 100vh;
`;

const MainContainer = styled.div`
  padding: 20px 0 20px 0;
`;

const HeadingText = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: var(--text-secondary);
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  padding: 40px;
  width: 100vw;
  height: 80vh;
  position: relative;
`;

const LeftContainer = styled.div`
  position: absolute;
  width: 50vw;
  img {
    width: 55vw;
    margin-left: 10vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 70vw;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      width: 80vw;
      margin-left: 0px;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  right: 0;
  position: absolute;
  float: right;

  width: 55vw;
  height: 40vh;
  background-color: #fbedea;
  border-radius: 500px 0 0 500px;
  margin-top: 10vh;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
    height: 30vh;
    margin-top: 3vh;
    align-self: flex-end;
  }
  @media screen and (max-width: 767px) {
    width: 80vw;
    height: 30vh;
    align-self: center;
  }
`;
const StarContainer = styled.div`
  display: flex;
  align-self: center;
  img {
    width: 35px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 25px;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      width: 20px;
    }
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-self: center;
  text-align: center;

  p {
    font-size: 20px;
    width: 35vw;
    font-weight: 700;
    color: var(--text-secondary);
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    p {
      font-size: 16px;
      width: 60vw;
    }
  }
  @media screen and (max-width: 767px) {
    p {
      font-size: 14px;
      width: 70vw;
    }
  }
`;
