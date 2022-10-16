import styled from "styled-components";

function Navbar(): JSX.Element {
  return (
    <Nav>
      <img alt="Logo" src="./images/Renovetalogo.png" />
      <ul>
        <li>
          <a href="about">Om Renoveta</a>
        </li>
        <li>
          <a href="/">Varför Renoveta?</a>
        </li>
        <li>
          <a href="kalkylen">Kalkylen</a>
        </li>
        <li>
          <a href="loginform">Logga in</a>
        </li>
        <button>
          <a href="registerform">Bli medlem</a>
        </button>
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
    padding-left: 50px;
    padding-right: 50px;
    font-size: 25px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    margin: 20;
    cursor: pointer;
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
`;
