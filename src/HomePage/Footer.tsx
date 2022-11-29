import styled from "styled-components";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../common/ScrollToTop";
import { IMenue } from "../types/Menue";

interface Props {
  menue: IMenue[];
}
function Footer({ menue }: Props): JSX.Element {
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
            {menue.map((menue) => (
              <h2 key={menue.url}>
                <Link onClick={ScrollToTop} className="Link" to={menue.url}>
                  {menue.title}
                </Link>
              </h2>
            ))}
            <h2 className="end">Följ oss på sociala medier</h2>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 450px;
  background: #c8e5d9;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;
  color: var(--text-secondary) !important;

  img {
    position: relative;

    left: 25px;
  }

  @media screen and (max-width: 1000px) {
    img {
      position: relative;
      height: 100px;
      width: 300px;
      left: -20px;
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

const FooterLink = styled.div`
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

  .end {
    margin-top: 30px;
  }

  @media screen and (max-width: 880px) {
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

  @media screen and (max-width: 1000px) {
    font-size: 18px;

    h1 {
      width: 300px;

      margin-right: 25px;
    }
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--text-secondary);
  height: 350px;
  position: absolute;
  top: 70px;

  @media screen and (max-width: 1000px) {
    left: 350px;
  }
`;
