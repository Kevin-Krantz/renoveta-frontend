import { Link } from "react-router-dom";
import Button from "../../../common/Button";
import styled from "styled-components";
import { ScrollToTop } from "../../../common/ScrollToTop";
import { IUser } from "../../../types/User";
import { IMenue } from "../../../types/Menue";
import ExtraUserMenue from "./ExtraUserMenue";
import ExtraNotUserMenue from "./ExtraNotUserMenue";

interface Props {
  user?: IUser;
  menue: IMenue[];
}

function DesktopMenue({ user, menue }: Props): JSX.Element {
  return (
    <Container>
      <ul>
        <li>
          <Link onClick={ScrollToTop} to="/">
            <img alt="Logo" src="./images/Renovetalogo.png" />
          </Link>
        </li>
        {menue.map((menue) => (
          <li key={menue.url}>
            <Link onClick={ScrollToTop} to={menue.url}>
              {menue.title}
            </Link>
          </li>
        ))}
        {user && <ExtraUserMenue />}
        {!user && <ExtraNotUserMenue />}
      </ul>
    </Container>
  );
}

export default DesktopMenue;

const Container = styled.div`
  margin-top: 25px;
  button {
    background-color: var(--bg-color);
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-top: 20px;
  }

  button:hover {
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }
`;
