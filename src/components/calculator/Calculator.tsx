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
  width: 100vw;
  background-repeat: none;
  background-size: 100vw;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  color: var(--text-secondary);
  text-align: center;
 padding-bottom: 30px;
`;

const Box = styled.span`
  display: flex;
  justify-content: center;
  text-align: left;
  width: 1100px;
  
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 32px;
  font-size: 18px;

  @media screen and (max-width: 1000px) {
    width: 90vw;
    left: -5px;
    font-size: 12px;
  
  }
`;
