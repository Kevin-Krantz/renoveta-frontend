import styled from "styled-components";

function Intro() {
  return (
    <StyledIntro>
      Grundarna av Renoveta, Linus och Elin, hade i början av år 2022 ett
      förutsättningslöst möte om ett vanligt upplevt problem som båda två ville
      hitta en lösning på. Allt krångel som privatpersoner stöter på vid
      renovering och alla oförutsedda kostnader som detta innebär. Alla timmar
      som läggs på att googla fram svar om priser, bygglov, hantverkare,
      ÄTA-arbeten, ROT-avdrag och material. Alla vanliga misstag som kan
      undvikas. Renoveta är ständigt under renovering för att du som användare
      ska få bästa möjliga upplevelse i tjänsten. I nuläget är tjänsten en
      demonstration av vad som komma skall.
    </StyledIntro>
  );
}

export default Intro;

const StyledIntro = styled.p`
  text-align: center;
  margin: 0 !important;
  display: inline-block;
  padding: 24px;

  @media only screen and (max-width: 880px) {
    font-size: 14px;
  }
`;
