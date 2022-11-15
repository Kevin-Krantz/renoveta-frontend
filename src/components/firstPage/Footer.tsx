import styled from "styled-components";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ScrollToTop } from "./common/ScrollToTop";

const handleClick = () => {
  ScrollToTop();
};

function Footer(): JSX.Element {
  return (
    <Container>
      <img src="/images/Renovetalogo.png" />
      <Row>
        <Heading>
          <h1>Ditt digitala verktyg för att planera din renovering</h1>
        </Heading>
        <VerticalLine></VerticalLine>
        <Column>
          <FooterLink>
            <h2>
              <Link onClick={handleClick} className="Link" to="/">
                Varför Renoveta?
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link onClick={handleClick} className="Link" to="/">
                Tjänsten
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link onClick={handleClick} className="Link" to="/aboutus">
                Om oss
              </Link>
            </h2>
          </FooterLink>
          <FooterLink>
            <h2>
              <Link onClick={handleClick} className="Link" to="/faq">
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
=======

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
>>>>>>> master
  );
}

export default Footer;

<<<<<<< HEAD
const Container = styled.div`
  height: 550px;
=======
const Box = styled.div`
>>>>>>> master
  background: #c8e5d9;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;
<<<<<<< HEAD
  color: var(--text-secondary) !important;

  @media screen and (max-width: 900px) {
    img {
      height: 100px;
      width: 300px;
=======
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
>>>>>>> master
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

<<<<<<< HEAD
  @media screen and (max-width: 900px) {
=======
  @media (max-width: 1000px) {
>>>>>>> master
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
<<<<<<< HEAD
  text-underline-offset: 5px;
  line-height: 2.5em;

  .Link {
    color: var(--text-secondary);
=======
  color: #1a5a4b;
  text-underline-offset: 5px;
  line-height: 2.5em;

  &.nounderline {
    text-decoration: none;
>>>>>>> master
  }

  h2 {
    font-weight: 700;
    margin-right: 200px;
  }

  &:hover {
<<<<<<< HEAD
    transition: 50ms ease-in;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
    h2 {
      margin-right: 25px;
    }
  }
=======
    color: #ffffff;
    transition: 50ms ease-in;
  }
>>>>>>> master
`;

const Heading = styled.div`
  font-size: 25px;
<<<<<<< HEAD
=======
  color: #1a5a4b;
>>>>>>> master

  h1 {
    font-weight: 700;
    line-height: 1.2em;
    width: 552px;
  }
<<<<<<< HEAD

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
=======
`;

const VerticalLine = styled.div`
  border-left: 1px solid #1a5a4b;
>>>>>>> master
  height: 350px;
  position: absolute;
  top: 70px;
`;
