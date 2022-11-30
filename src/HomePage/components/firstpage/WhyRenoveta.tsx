import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../common/Button";
import { ScrollToTop } from "../../../common/ScrollToTop";

function WhyRenoveta() {
  return (
    <Container>
      <div>
        <h1>Varför Renoveta? </h1>
        <p>”allt du behöver veta vid din renovering”</p>
        <p>
          Tänk på Renoveta som någon som håller dig i handen och stöttar dig
          innan under och efter din renovering. Någon som berättar hur du ska gå
          tillväga, vad det borde kosta, hur du kan göra det billigare och hur
          du undviker vanliga misstag.
        </p>
        <p>
          Det finns en djungel av information att inhämta inför renovering och
          varje renovering är unik. Kostnader, myndighetsansvar,
          arbetsmiljöansvar, ansvarsförsäkring, intyg, avtal och mer är något du
          kommer bekanta dig med under din renovering. Vi vet att det inte är en
          dans på rosor, därför skapade vi tjänsten Renoveta.
        </p>
        <p>
          Vårt mål är att enkelt, smidigt och kostnadsfritt ge dig allt du
          behöver veta vid just din renovering. Vår kunskap ska ge dig trygghet.
        </p>
      </div>
      <LowerSection>
        <h1> Tjänsten</h1>
        <p>
          Vårt digitala verktyg hjälper dig ta fram anpassad information om just
          din renovering.
        </p>
        <li>
          Uppskattad kostnad, som du kan planera efter och jämföra med intagna
          offerter?
        </li>
        <li>Tips på hur du kan göra det billigare? </li>
        <li>Energieffektivisering och miljövänliga alternativ?</li>
        <li>
          Myndighetskrav i form av bygglov, bygganmälan, VA-anmälan och
          tillstånd?
        </li>
        <li>
          Ditt ansvar för arbetsmiljö, elektronisk personalliggare och
          ansvarsförsäkring?
          <li>
            Anpassat avtal utefter din renovering som reglerar tider och
            ekonomi?
          </li>
          <li>Konstruktör och konstruktionsdokumentation?</li>
        </li>
        <li>Kontrollansvarig och kontrollplan?</li>
        <p>
          Vad funderar du över? Vi tar fram allt du behöver veta vid din
          renovering.
        </p>
        <Link to="/renovetaform" onClick={ScrollToTop}>
          <Button
            label="Kom igång!"
            primary={true}
            type="button"
            className="buttonright"
          />
        </Link>
      </LowerSection>
    </Container>
  );
}

export default WhyRenoveta;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  max-width: 650px;
  margin-left: 300px;
  color: var(--text-secondary);

  p {
    margin-top: 10px;
  }
`;

const LowerSection = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }

  li {
    text-align: left;
  }

  .buttonright {
    width: 100px;
    height: 50px;
    margin-bottom: 10px;
  }
`;
