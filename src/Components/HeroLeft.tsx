import styled from "styled-components";

function HeroLeft() {
  return (
    <Container>
      <div>
        <h1>Trött på att googla dig fram? </h1>
        <h1>Börja med Renoveta istället.</h1>
      </div>
      <div>
        <p>
          Vår digitala lösning ger dig anpassad information kring just ditt
          renoveringsprojekt.
        </p>
        <p>Prova idag - enkelt, smidigt och kostnadsfritt.</p>
      </div>
      <div>
        <Button className="buttonleft">Om tjänsten</Button>
        <Button className="buttonright">Prova kalkylen</Button>
      </div>
    </Container>
  );
}

export default HeroLeft;

const Container = styled.div`
  display: grid;
  margin-top: 15%;
  margin-left: 15%;

  h1 {
    font-size: 42px;
  }

  p {
    font-size: 32px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid var(--bg-secondary);
  color: var(--text-primary);
  background-color: var(--bg-color);
  margin: 68px;

  .buttonleft {
    align-items: left;
  }
  .buttonright {
    align-items: right;
  }
`;
