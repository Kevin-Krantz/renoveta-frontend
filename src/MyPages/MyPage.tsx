import styled from "styled-components";
import { IUser } from "../types/User";
import Form from "./FormsTable";

interface Props {
  user?: IUser;
}
function MyPage({ user }: Props) {
  return (
    <Container>
      <h1>{"Hej! " + user?.name}</h1>
      {user?.isAdmin && <Title>Ärenden</Title>}
      {!user?.isAdmin && <Title>Dina pågående ärenden</Title>}
      <Form user={user} />
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  width: 500px;
  margin: 30px;
  color: var(--text-secondary);
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 16px !important;
`;
