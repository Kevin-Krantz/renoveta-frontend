import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button";

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
        <Button
          label=" Om tjänsten"
          primary={false}
          type="button"
          className="buttonleft"
        />
        <Link to="/kalkylen">
          <Button
            label="Prova kalkylen"
            primary={true}
            type="button"
            className="buttonright"
          />
        </Link>
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
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
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
      top: 5px;
    }
    .buttonright {
      width: 100px;
      height: 40px;
      top: 5px;
    }
  }
`;
