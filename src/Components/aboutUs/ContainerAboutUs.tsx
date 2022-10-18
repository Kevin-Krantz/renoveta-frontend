import styled from "styled-components";

interface Props {
  img: string;
  name: string;
  position: string;
  job: string;
  text: string;
}
function ContainerAboutUs({ img, name, position, job, text }: Props) {
  return (
    <Wrapper>
      <img src={img} />
      <h1>{name}</h1>
      <h2>{position}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
    </Wrapper>
  );
}

export default ContainerAboutUs;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  h1 {
    font-weight: bolder;
  }

  h2 {
    font-weight: bold;
  }
`;
