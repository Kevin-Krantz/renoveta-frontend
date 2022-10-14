import styled from "styled-components";

function Footer(): JSX.Element {
  return (
    <MainFooter>
      <div>
        <RenovetaLogo src="./images/Renovetalogo.png" />
        <Sub>
          <FixedBigText>
            <h1>Ditt digitala verktyg för</h1>
            <h1>att planera din</h1>
            <h1>renovering</h1>
          </FixedBigText>
          <VerticalLine></VerticalLine>
          <FixedSmallText>
            <h1>Om Renoveta</h1>
            <h1>Vad är Renoveta?</h1>
            <h1>Hur fungerar det?</h1>
            <h1>Kontakta oss</h1>
            <br />
            <br />
            <h1>Följ oss på sociala medier</h1>
          </FixedSmallText>
        </Sub>
      </div>
    </MainFooter>
  );
}

export default Footer;

const MainFooter = styled.div`
  background-color: #67bd9c;
  color: white;
`;

const Sub = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RenovetaLogo = styled.img`
  margin-top: 45px;
  margin-left: 20px;
  width: 450px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid white;
  margin-top: -150px;
  margin-bottom: 20px;
`;

const FixedBigText = styled.div`
  font-size: 35px;
  margin-left: 60px;
`;

const FixedSmallText = styled.div`
  margin-right: 400px;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
`;
