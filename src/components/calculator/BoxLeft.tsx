import styled from "styled-components";
import Button from "../../common/Button";

function BoxLeft() {
  return (
    <Left>
      <Logo src="logo\renoveta-logo--mint-symbol-2160.png" />
      <h1>Vad Kommer din renovering att kosta?</h1>
      <p>
        Med vår kalkyl får du en uppskattning på kostnaden av ditt projekt.
        Önskar du få fler uppgifter vad som gäller?
        <br />
        <br />
        Registrera dina uppgifter, och få tillgång till hela vår tjänst.
      </p>
      <ul>
        <li>Prisindikation </li>
        <li>Skräddarsytt avtal </li>
        <li>Regel-koll</li>
      </ul>
      <Button
        className="button"
        primary={true}
        type="submit"
        label={"Registrera dig"}
      />
    </Left>
  );
}

export default BoxLeft;

const Left = styled.span`
  width: 450px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 5px solid var(--bg-secondary);
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  padding-left: 72px;
  padding-top: 100px;
  padding-bottom: 72px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-weight: 600;
  }
  ul {
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 880px) {
    width: 400px;

    padding-left: 16px;

    h1 {
      font-size: 18px;
    }

    .button {
      width: 120px;
      height: 30px;
    }
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 150px;
  top: 2px;
  left: -10px;

  @media screen and (max-width: 880px) {
    width: 120px;
    top: -10px;
    left: -20px;
  }
`;
