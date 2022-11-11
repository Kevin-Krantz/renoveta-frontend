import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Button from "../common/Button";
import { ScrollToTop } from "../common/ScrollToTop";

interface Props {
  hamburgerOpen: boolean;
}
function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState<Props | boolean>(true);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleClick = () => {
    ScrollToTop();
  };

  return (
    <Container onClick={toggleHamburger}>
      {hamburgerOpen ? (
        <Icon className="fa-solid fa-bars" />
      ) : (
        <Burger>
          <i className="fa-solid fa-bars" />
          <div>
            <Link onClick={handleClick} to="/">
              Varför Renoveta?
            </Link>
          </div>
          <div>
            <Link onClick={handleClick} to="/">
              Tjänsten
            </Link>
          </div>
          <div>
            <Link onClick={handleClick} to="/aboutus">
              Om oss
            </Link>
          </div>
          <div>
            <Link onClick={handleClick} to="/faq">
              Q&A
            </Link>
          </div>
          <div>
            <Link onClick={handleClick} to="/login">
              Logga in
            </Link>
          </div>
          <Link onClick={handleClick} to="/register" style={{ all: "unset" }}>
            <Button label="Börja Renoveta" primary={false} type={onsubmit} />
          </Link>
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
  width: 400px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  cursor: pointer;

  button {
    background-color: var(--bg-color);
    font-size: 14px;
    font-weight: bold;
    height: 40px;
    width: 130px;
    color: white;
  }

  button:hover {
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }
`;

const Icon = styled.i`
  margin-top: -10px;
`;

const Burger = styled.div`
  display: inline;
  margin-top: 30px;
  justify-content: space-around;
  flex-flow: column wrap;
  height: 200px;
`;
