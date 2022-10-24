import styled from "styled-components";

function Footer(): JSX.Element {
  return (
    <Box>
      <Container>
        <img alt="" src="/images/Renovetalogo.png" />
        <Row>
          <Heading>
            <h1>Ditt digitala verktyg för att planera din renovering</h1>
          </Heading>
          <VerticalLine></VerticalLine>
          <Column>
            <FooterLink href="#">
              <h2>Om Renoveta</h2>
            </FooterLink>
            <FooterLink href="#">
              <h2>Vad är Renoveta?</h2>
            </FooterLink>
            <FooterLink href="#">
              <h2>Hur fungerar det?</h2>
            </FooterLink>
            <FooterLink href="#">
              <h2>Kontakta oss</h2>
            </FooterLink>
            <br />
            <br />
            <FooterLink className="nounderline" href="#">
              <h2>Följ oss på sociala medier</h2>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;

const Box = styled.div`
  background: #c8e5d9;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;
`;

const Container = styled.div`
  @media all and (max-width: 27in) {
    img {
      height: 120px;
      margin-left: 455px;
    }
  }

  @media all and (max-width: 25in) {
    img {
      height: 120px;
      margin-left: 240px;
    }
  }
`;

const Column = styled.div`
  position: relative;
  bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-content: space-evenly;
  place-items: flex-start;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
  color: #1a5a4b;
  text-underline-offset: 5px;
  line-height: 2.5em;

  &.nounderline {
    text-decoration: none;
  }

  h2 {
    font-weight: 700;
    margin-right: 200px;
  }

  &:hover {
    color: #ffffff;
    transition: 50ms ease-in;
  }
`;

const Heading = styled.div`
  font-size: 25px;
  color: #1a5a4b;

  h1 {
    font-weight: 700;
    line-height: 1.2em;
    width: 552px;
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid #1a5a4b;
  height: 350px;
  position: absolute;
  top: 70px;
`;
