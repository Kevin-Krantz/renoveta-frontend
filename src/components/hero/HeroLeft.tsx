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

  @media screen and (max-width: 880px) {
    width: 100px;
    height: 40px;
    top: 5px;
  }
`;
