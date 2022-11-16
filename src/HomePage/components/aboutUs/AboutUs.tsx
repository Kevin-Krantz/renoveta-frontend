import styled from "styled-components";
import End from "./End";
import Intro from "./Intro";
import { IMember } from "../../../types/Member";
import MemberList from "./MemberList";

interface Props {
  members: IMember[];
}

function AboutUs({ members }: Props) {
  return (
    <Container>
      <Intro />
      {members.map((member) => (
        <div key={member.imgUrl}>
          <MemberList {...member} />
        </div>
      ))}
      <End />
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  display: grid;
  grid-template-rows: 200px 350px 350px 350px 350px 600px;
  color: var(--text-secondary);
  position: relative;

  @media screen and (max-width: 1000px) {
    grid-template-rows: 150px 250px 250px 250px 250px 350px;
  }
`;
