import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../../common/Button";
import { ScrollToTop } from "../../../common/ScrollToTop";
import { IUser } from "../../../types/User";
import { IMenue } from "../../../types/Menue";
import ExtraUserMenue from "./ExtraUserMenue";
import ExtraNotUserMenue from "./ExtraNotUserMenue";

interface IHamburger {
  hamburgerOpen: boolean;
}
interface Props {
  user?: IUser;
  menue: IMenue[];
}

function Hamburger({ user, menue }: Props) {
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
            {menue.map((menue) => (
              <li key={menue.url}>
                <Link onClick={ScrollToTop} to={menue.url}>
                  {menue.title}
                </Link>
              </li>
            ))}
            {user && <ExtraUserMenue />}
            {!user && <ExtraNotUserMenue />}
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
