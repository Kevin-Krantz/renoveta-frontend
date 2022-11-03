import styled, { css } from "styled-components";
import { IMember } from "../../types/Member";

function MemberList({ imgUrl, name, position, job, right }: IMember) {
  return (
    <Container>
      <Image src={imgUrl} right={right} />
      <BgImage right={right} />
      <Text right={right}>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{job}</p>
      </Text>
    </Container>
  );
}

export default MemberList;

const Container = styled.div`
  position: relative;
  text-align: left;
  align-items: center;
  color: var(--text-secondary);
  margin: none;
  padding: none;
`;

interface RightSide {
  right: boolean;
}

const Image = styled.img<RightSide>`
  height: 300px;
  width: 225px;
  position: absolute;
  top: 8px;
  left: 250px;
  ${(props) =>
    props.right &&
    css`
      left: 780px;
    `};
`;

const BgImage = styled.img<RightSide>`
  position: absolute;
  top: 250px;
  width: 500px;
  height: 346px;
  background-image: url("images/pink-rectangle-right.png");
  background-repeat: no-repeat;
  outline: 0;
  ${(props) =>
    props.right &&
    css`
      background-image: url("images/pink-rectangle-left.png");
      right: 0;
    `};
`;

const Text = styled.div<RightSide>`
  position: absolute;
  top: 370px;
  left: 200px;

  ${(props) =>
    props.right &&
    css`
      left: 900px;
    `};
  h1 {
    font-size: 24px;
    font-weight: bolder;
    text-align: left;
  }
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
