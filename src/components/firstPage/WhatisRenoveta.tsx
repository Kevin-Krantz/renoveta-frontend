import styled from "styled-components";

function WhatisRenoveta() {
  return (
    <Container>
      <MainContainer>
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
                behöver veta - helt anpassad efter just din renovering. Vi ger
                dig snabba svar på funderingarna om kostnad, bygglov och avtal
                samt tar fram förslag på hur du kan renovera mer hållbart och
                ekonomiskt. Vår erfarenhet är din trygghet.
              </p>
            </TextContainer>
          </RightContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default WhatisRenoveta;

const Container = styled.div`
  height: 100vh;
`;

const MainContainer = styled.div`
  padding: 20px 0 20px 0;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
  }

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`;

const HeadingText = styled.h2`
  display: block;
  text-align: left;
  font-size: 30px;
  font-weight: 900;
  color: var(--text-secondary);
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 80vh;
  position: relative;
  margin-top: 10vh;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
  }
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
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
      width: 80vw;
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
  right: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 55vw;
  background-color: #fbedea;
  height: 40vh;
  border-radius: 500px 0 0 500px;
  margin-top: 10vh;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
    height: 30vh;
    margin-top: 8vh;
    align-self: flex-end;
  }
  @media screen and (max-width: 767px) {
    width: 80vw;
    height: 30vh;
    margin-top: 3vh;
    align-self: center;
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

  @media screen and (max-width: 767px) {
    align-self: right;

    p {
      font-size: 11px;
      width: 70vw;
      padding-left: 20px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    align-self: right;

    p {
      width: 60vw;
      padding-left: 20px;
      font-size: 13px;
    }
  }
`;
