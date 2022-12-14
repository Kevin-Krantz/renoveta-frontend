import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../common/Button";
import { ScrollToTop } from "../../../common/ScrollToTop";

function Compilation() {
  return (
    <Container>
      <div>
        <Image src="\images\renovetaformmedbakgrund.png" />
      </div>
      <Text>
        <h1>Få koll på din renovering idag – med vår skräddarsydda tjänst!</h1>
        <p>
          Tänk på Renoveta som någon som håller dig i handen och stöttar dig
          innan, under och efter din renovering. Någon som berättar hur du ska
          gå tillväga, vad det borde kosta, hur du kan göra det billigare och
          hur du undviker vanliga misstag. Det ska vara lätt att göra rätt. Låt
          oss hjälpa dig.
        </p>
        <Link onClick={ScrollToTop} to="/register">
          <Button
            primary={true}
            type="register"
            label={"Registrera dig"}
          ></Button>
        </Link>
      </Text>
    </Container>
  );
}

export default Compilation;

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  position: relative;
  height: 130vh;
  background-image: url("/images/Vector.png"), url("/images/renoveratak.png");
  background-position: bottom, left top;
  background-repeat: no-repeat, no-repeat;
  @media screen and (max-width: 880px) {
    grid-template-columns: 80px 150px;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 450px;
  width: 400px;
  top: 100px;
  left: 80px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  @media screen and (max-width: 880px) {
    width: 220px;
    height: 250px;
    left: 10px;
  }
`;

const Text = styled.div`
  margin-top: 100px;
  margin-left: 150px;
  width: 600px;

  h1 {
    font-weight: bolder;
    font-size: 45px;
    color: var(--text-secondary);
  }

  p {
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: bold;
  }

  @media screen and (max-width: 880px) {
    width: 300px;
    margin-left: 200px;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;
