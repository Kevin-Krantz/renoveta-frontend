import styled from "styled-components";
import Header from "./Header";
import BoxLeft from "./BoxLeft";
import BoxRight from "./BoxRight";

function Calculator() {
  return (
    <Image>
      <Container>
        <Header />
        <Box>
          <BoxLeft />
          <BoxRight />
        </Box>
      </Container>
    </Image>
  );
}

export default Calculator;

const Image = styled.div`
  background-image: url("images/bg-photo-paint.png");
  background-size: 180%;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  color: var(--text-secondary);
  text-align: center;
`;

const Box = styled.span`
  display: flex;
  justify-content: center;
  text-align: left;
  width: 80%;
  left: 10%;
  position: relative;
  padding-bottom: 32px;
  font-size: 18px;
`;
