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
      <BgImage src="images\pink-rectangle-right.png" />
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
      <ImageRight src={img} />
      <BgImageRight src="images\pink-rectangle-left.png" />
      <TextRight>
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{job}</p>
      </TextRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  align-items: center;
  color: var(--text-secondary);
  margin: none;
  padding: none;
`;

const Image = styled.img`
  height: 300px;
  width: 225px;
  position: absolute;
  top: 8px;
  left: 20%;
`;

const ImageRight = styled(Image)`
  left: 60%;
`;

const BgImage = styled.img`
  position: absolute;
  top: 250px;
  width: 470px;
  height: 277px;
`;

const BgImageRight = styled(BgImage)`
  right: 0;
`;

const Text = styled.div`
  position: absolute;
  top: 300px;
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

const TextRight = styled(Text)`
  left: 70%;
`;
