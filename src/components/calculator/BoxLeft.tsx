import styled from "styled-components";
import Button from "../../AllPages/common/Button";

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
      <Button primary={true} type="submit" label={"Registrera dig"} />
    </Left>
  );
}

export default BoxLeft;

const Left = styled.span`
  width: 45%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 5px solid var(--bg-secondary);
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  padding-left: 72px;
  padding-top: 72px;
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
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 10%;
  top: 8px;
  left: 48px;
`;
