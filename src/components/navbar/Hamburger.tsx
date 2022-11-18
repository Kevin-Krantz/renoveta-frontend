import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../common/Button";
import { ScrollToTop } from "../../common/ScrollToTop";
import { IUser } from "../../types/User";

interface IHamburger {
  hamburgerOpen: boolean;
}
interface Props {
  user?: IUser;
}

function Hamburger({ user }: Props) {
  const [hamburgerOpen, setHamburgerOpen] = useState<IHamburger | boolean>(
    true
  );

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <Container onClick={toggleHamburger}>
      {hamburgerOpen ? (
        <Icon className="fa-solid fa-bars" />
      ) : (
        <Burger>
          <>
            <i className="fa-solid fa-bars" />
            <div>
              <Link onClick={ScrollToTop} to="/">
                Varför Renoveta?
              </Link>
            </div>
            <div>
              <Link onClick={ScrollToTop} to="/aboutus">
                Om oss
              </Link>
            </div>
            <div>
              <Link onClick={ScrollToTop} to="/faq">
                Q&A
              </Link>
            </div>
            {user && (
              <>
                <div>
                  <Link onClick={ScrollToTop} to="/me">
                    Mina Sidor
                  </Link>
                </div>
                <Link
                  onClick={ScrollToTop}
                  to="/logout"
                  style={{ all: "unset" }}
                >
                  <Button label="Logga ut" primary={false} type={onsubmit} />
                </Link>
              </>
            )}
            {!user && (
              <>
                <div>
                  <Link onClick={ScrollToTop} to="/login">
                    Logga in
                  </Link>
                </div>
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
        </Burger>
      )}
    </Container>
  );
}

export default Hamburger;

const Container = styled.div`
  white-space: nowrap;
  position: sticky;
  background-color: #ffffff;
  width: 100px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  button {
    background-color: var(--bg-color);
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    width: 120px;
    color: white;
    margin-top: 10px;
  }

  button:hover {
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }
`;

const Icon = styled.i`
  margin-top: -5px;
`;

const Burger = styled.div`
  display: inline;
  margin-top: 30px;
  justify-content: space-around;
  flex-flow: column wrap;
  height: 250px;

  i {
    margin-top: 10px;
    margin-bottom: 25px;
  }
`;
