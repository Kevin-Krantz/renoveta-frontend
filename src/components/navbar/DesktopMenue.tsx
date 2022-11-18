import { Link } from "react-router-dom";
import Button from "../../common/Button";
import styled from "styled-components";
import { ScrollToTop } from "../../common/ScrollToTop";
import { IUser } from "../../types/User";

interface Props {
  user?: IUser;
}

function DesktopMenue({ user }: Props): JSX.Element {
  return (
    <Container>
      <ul>
        <img alt="Logo" src="./images/Renovetalogo.png" />
        <>
          <li>
            <Link onClick={ScrollToTop} to="/">
              Varför Renoveta?
            </Link>
          </li>

          <li>
            <Link onClick={ScrollToTop} to="/aboutus">
              Om oss
            </Link>
          </li>
          <li>
            <Link onClick={ScrollToTop} to="/faq">
              Q&A
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link onClick={ScrollToTop} to="/me">
                  Mina Sidor
                </Link>
              </li>
              <Link onClick={ScrollToTop} to="/logout" style={{ all: "unset" }}>
                <Button label="Logga ut" primary={false} type={onsubmit} />
              </Link>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link onClick={ScrollToTop} to="/login">
                  Logga in
                </Link>
              </li>
              <Link
                onClick={ScrollToTop}
                to="/renovetaform"
                style={{ all: "unset" }}
              >
                <Button
                  label="Börja Renoveta"
                  primary={false}
                  type={onsubmit}
                />
              </Link>
            </>
          )}
        </>
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
