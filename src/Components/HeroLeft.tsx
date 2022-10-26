import styled from "styled-components";

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
  margin-left: 10%;
  margin-top: 15%;

  h1 {
    font-size: 32px;
    margin: 0%;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin: 0%;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid var(--bg-secondary);
  color: var(--text-primary);
  background-color: var(--bg-color);
  margin-right: 32px;
  margin-left: 32px;

  .buttonleft {
    align-items: left;
  }
  .buttonright {
    align-items: right;
  }
`;
