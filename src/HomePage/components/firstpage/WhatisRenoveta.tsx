import styled from "styled-components";

function WhatisRenoveta() {
  return (
    <Container>
      <ContentContainer>
        <LeftContainer>
          <img src="/images/renovetaReviews.png" />
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <HeadingText>Vad är Renoveta?</HeadingText>
            <p>
              När vi köper en bostad så tillkommer underhåll och renovering -
              exteriört som interiört. Renoveringar kan bli en krånglig,
              tidskrävande och kostsam historia om det inte går rätt till. Det
              vill vi förändra.
              <br></br>
              <br></br>
              Genom att erbjuda en digital tjänst som sammanställer allt du
              behöver veta - helt anpassad efter just din renovering. Vi ger dig
              snabba svar på funderingarna om kostnad, bygglov och avtal samt
              tar fram förslag på hur du kan renovera mer hållbart och
              ekonomiskt. Vår erfarenhet är din trygghet.
            </p>
          </TextContainer>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}

export default WhatisRenoveta;

const Container = styled.div`
  height: 100vh;
`;

const HeadingText = styled.h2`
  display: block;
  text-align: left;
  font-size: 30px;
  font-weight: 900;
  color: var(--text-secondary);
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  position: relative;
  margin-top: 10vh;

  @media screen and (max-width: 880px) {
    width: 650px;
  }
`;

const LeftContainer = styled.div`
  position: absolute;
  width: 30vw;

  img {
    width: 55vw;
    margin-left: 2vw;
  }

  @media screen and (max-width: 880px) {
    img {
      width: 50vw;
      margin-left: 1vw;
    }
  }
`;

const RightContainer = styled.div`
  right: 15px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 55vw;
  background-color: var(--bg-tertiary);
  height: 500px;
  border-radius: 500px 0 0 500px;
  margin-top: 15px;

  @media screen and (max-width: 880px) {
    width: 450px;
    height: 400px;
    align-self: flex-end;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: left;

  p {
    font-size: 15px;
    width: 35vw;
    font-weight: 700;
    color: var(--text-secondary);
    margin-top: 10px;
  }

  @media screen and (max-width: 880px) {
    p {
      font-size: 12px;
      width: 300px;
    }
  }
`;
