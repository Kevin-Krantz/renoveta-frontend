import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../common/Button";
import { ScrollToTop } from "../../../../common/ScrollToTop";
import { ScrollToView } from "../../../../common/ScrollToView";

function HeroLeft() {
  return (
    <Container>
      <h1>
        Trött på att googla dig fram? <br />
        Börja med Renoveta istället.
      </h1>
      <p>
        Vår digitala lösning ger dig anpassad information kring just ditt
        renoveringsprojekt. <br />
        Prova idag - enkelt, smidigt och kostnadsfritt.
      </p>
      <StyledButton>
        <Link onClick={ScrollToTop} to="/whyrenoveta">
          <Button
            label=" Om tjänsten"
            primary={false}
            type="button"
            className="buttonleft"
          />
        </Link>
        <Button
          label="Kom igång!"
          primary={true}
          type="button"
          className="buttonright"
          onClick={ScrollToView} //doesn't work yet
        />
      </StyledButton>
    </Container>
  );
}

export default HeroLeft;

const Container = styled.div`
  display: grid;
  margin-left: 25px;
  margin-top: 40px;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }

  @media screen and (max-width: 880px) {
    display: grid;
    grid-template-rows: 100px 80px;
    margin-top: 20px;
    width: 200px;
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const StyledButton = styled.div`
  display: flex;
  width: 400px;
  height: 100px;

  .buttonleft {
    width: 185px;
    align-items: left;
    margin-right: 80px;
    background-color: transparent;
    color: var(--text-primary);
  }
  .buttonright {
    width: 185px;
    background-color: var(--bg-color);
    align-items: right;
    color: var(--text-primary);
  }

  @media screen and (max-width: 880px) {
    .buttonleft {
      width: 100px;
      height: 40px;
      margin-top: 25px;
    }
    .buttonright {
      width: 100px;
      height: 40px;
      margin-top: 25px;
    }
  }
`;
