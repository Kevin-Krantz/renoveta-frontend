import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";

function Navbar(): JSX.Element {
  return (
    <Container>
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
    font-size: 24px;
  }

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

  a:hover {
    transform: scale(1.03);
  }

  a:active {
    transform: scale(1);
  }

  @media screen and (max-width: 880px) {
    display: grid;
    padding-left: 15px;

    ul {
      display: grid;
      grid-template-rows: repeat(7, 1px);
      padding-left: 30px;
      padding-bottom: 5px;
      gap: 1.5rem;
    }

    li {
      font-size: 16px;
      margin: 0px !important;
    }

    button {
      font-size: 16px;
      font-weight: bold;
      color: white;
      margin: 0;
      width: 130px;
      height: 30px;
      border-radius: 8px;
    }
  }
`;
