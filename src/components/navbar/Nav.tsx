import { useEffect, useState } from "react";
import styled from "styled-components";
import DesktopMenue from "./DesktopMenue";
import Hamburger from "./Hamburger";

function Navbar(): JSX.Element {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 880;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <Container>
      <img alt="Logo" src="./images/Renovetalogo.png" />
      {width < breakpoint ? (
        <Burger>
          <Hamburger />
        </Burger>
      ) : (
        <DesktopMenue />
      )}
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  white-space: nowrap;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10000;

  a {
    text-decoration: inherit;
    color: unset;
  }

  img {
    width: 300px;
    height: 100px;
  }

  ul {
    display: flex;
    gap: 3rem;
    margin-right: 25px;
  }

  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
  }

  a:hover {
    transform: scale(1.03);
  }

  a:active {
    transform: scale(1);
  }
`;

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: fixed;
    padding-top: 10px;
    margin-left: 10px;
  }
`;
