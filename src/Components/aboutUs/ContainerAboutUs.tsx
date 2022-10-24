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
      <Left src={img} />
      <div>
        <Name>{name}</Name>
        <Job>{position}</Job>
        <Job>{job}</Job>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
}

export default ContainerAboutUs;

const Wrapper = styled.div`
  display: grid;
  color: var(--text-secondary);
`;

const Left = styled.img`
  height: 200px;
  width: 150px;
  padding-bottom: 15px;
  padding-right: 50px;
  padding-top: 15px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bolder;
`;

const Job = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
