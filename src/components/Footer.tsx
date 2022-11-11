import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer(): JSX.Element {
  return (
    <Container>
      <img alt="" src="/images/Renovetalogo.png" />
      <Row>
        <Heading>
          <h1>Ditt digitala verktyg för att planera din renovering</h1>
        </Heading>
        <VerticalLine></VerticalLine>
        <Column>
          <FooterLink>
            <h2>
              <Link className="Link" to="">
                Varför Renoveta?
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link className="Link" to="">
                Tjänsten
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link className="Link" to="/aboutus">
                Om oss
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link className="Link" to="/faq">
                Q&A
              </Link>
            </h2>
          </FooterLink>
          <br />
          <br />
          <FooterLink className="nounderline">
            <h2>Följ oss på sociala medier</h2>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 550px;
  background: #c8e5d9;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;
  color: var(--text-secondary) !important;

  @media screen and (max-width: 900px) {
    img {
      height: 100px;
      width: 300px;
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

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
  text-underline-offset: 5px;
  line-height: 2.5em;

  .Link {
    color: var(--text-secondary);
  }

  h2 {
    font-weight: 700;
    margin-right: 200px;
  }

  &:hover {
    transition: 50ms ease-in;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
    h2 {
      margin-right: 25px;
    }
  }
`;

const Heading = styled.div`
  font-size: 25px;

  h1 {
    font-weight: 700;
    line-height: 1.2em;
    width: 552px;
  }

  @media screen and (max-width: 900px) {
    font-size: 18px;

    h1 {
      width: 350px;
      margin-left: 10px;
      margin-right: 25px;
    }
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--text-secondary);
  height: 350px;
  position: absolute;
  top: 70px;
`;
