import styled from "styled-components";

interface Props {
  img: string;
  name: string;
  position: string;
  job: string;
}
export function LeftContainer({ img, name, position, job }: Props) {
  return (
    <Wrapper>
      <Image src={img} />
      <BgImage src="images\Rectangle-BG-pink2.png" />
      <Text>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{job}</p>
      </Text>
    </Wrapper>
  );
}

export function RightContainer({ img, name, position, job }: Props) {
  return (
    <Wrapper>
      <ImageTwo src={img} />
      <BgImage src="images\Rectangle-BG-pink.png" />
      <Text>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{job}</p>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  align-items: center;
  color: var(--text-secondary);
`;

const Image = styled.img`
  height: 200px;
  width: 150px;
  position: absolute;
  top: 32px;
  left: 20%;
`;

const ImageTwo = styled(Image)`
  left: 80%;
`;

const BgImage = styled.img`
  position: absolute;
  top: 200px;
  size: 50%;
`;

const Text = styled.div`
  position: absolute;
  top: 250px;
  left: 20%;
  h1 {
    font-size: 18px;
    font-weight: bolder;
    text-align: left;
  }
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
