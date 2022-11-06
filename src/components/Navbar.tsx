import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";

function Navbar(): JSX.Element {
  return (
    <Nav>
      <img alt="Logo" src="./images/Renovetalogo.png" />
      <ul>
        <li>
          <Link to="/aboutus">Varför Renoveta?</Link>
        </li>
        <li>
          <Link to="/">Tjänsten</Link>
        </li>
        <li>
          <Link to="/kalkylen">Om oss</Link>
        </li>
        <li>
          <Link to="/faq">Q&A</Link>
        </li>
        <li>
          <Link to="/login">Logga in</Link>
        </li>
        <Link to="/register" style={{ all: "unset" }}>
          <Button label="Börja Renoveta" primary={false} type={onsubmit} />
        </Link>
      </ul>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  white-space: nowrap;
  position: sticky;
  top: 0;
  background-color: #ffffff;

  @media all and (max-width: 1280px) {
    margin-left: -40px;
  }

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
  }

  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 25px;
  }

  button {
    background-color: #e34356;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-top: 15px;
  }

  button:hover {
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }

  a:hover {
    transform: scale(1.03);
  }

  a:active {
    transform: scale(1);
  }
`;
