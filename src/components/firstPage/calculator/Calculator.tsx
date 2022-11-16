import styled from "styled-components";
import BoxLeft from "./BoxLeft";
import BoxRight from "./BoxRight";

function Calculator() {
  return (
    <Image>
      <Container>
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
  background-size: auto;
  background-repeat: none;
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
  width: 1100px;
  left: 100px;
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 32px;
  font-size: 18px;

  @media screen and (max-width: 880) {
    width: 500px;
    right: 50px;

    font-size: 14px !important;
  }
`;
