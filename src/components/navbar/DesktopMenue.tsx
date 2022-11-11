import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components";

function DesktopMenue() {
  return (
    <Container>
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

export default DesktopMenue;

const Container = styled.div`
  margin-top: 25px;

  button {
    background-color: var(--bg-color);
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  button:hover {
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }
`;
