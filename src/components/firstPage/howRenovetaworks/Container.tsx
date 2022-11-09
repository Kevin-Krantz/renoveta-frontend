import { IList } from "./IList";
import styled from "styled-components";

interface Props {
  list: IList[];
}

function HowRenovetaWorks({ list }: Props) {
  return (
    <>
      <Title>Så här fungerar Renoveta</Title>
      <Container>
        {list.map((item: any) => (
          <Item key={item.imgUrl}>
            <img src={item.imgUrl} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default HowRenovetaWorks;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  font-size: 25px;

  h3 {
    margin-top: 50px;
    font-weight: 700;
    color: var(--text-secondary);
  }

  @media screen and (max-width: 880px) {
    font-size: 14px;
  }
`;

const Item = styled.div`
  width: 350px;
  height: 350px;
  margin: 30px;
`;
