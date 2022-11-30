import styled from "styled-components";
import Button from "../common/Button";
import { IUser } from "../types/User";
import FormsTable from "./FormsTable";
import FormsTableAdmin from "./FormsTableAdmin";

interface Props {
  user?: IUser;
}
function MyPage({ user }: Props) {
  return (
    <Container>
      <h1>{"Välkommen till mina sidor, " + user?.name + "!"}</h1>
      <h3>Här har vi samlat alla dina pågående ärenden hos oss.</h3>
      {user?.isAdmin && <Title>Ärenden</Title>}
      {!user?.isAdmin && <Title>Mina pågående projekt</Title>}
      {!user?.isAdmin && <FormsTable />}
      {user?.isAdmin && <FormsTableAdmin />}
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  display: grid;
  justify-items: center;
  color: var(-- text-secondary);
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 16px !important;
  font-weight: bolder;
  font-size: larger;
`;
