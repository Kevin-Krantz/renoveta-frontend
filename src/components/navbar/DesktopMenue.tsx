import { Link } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components";
import { ScrollToTop } from "../common/ScrollToTop";

const handleClick = () => {
  ScrollToTop();
};

function DesktopMenue() {
  return (
    <Container>
      <ul>
        <li>
          <Link onClick={handleClick} to="/">
            Varför Renoveta?
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/">
            Tjänsten
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/aboutus">
            Om oss
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/faq">
            Q&A
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/login">
            Logga in
          </Link>
        </li>
        <Link onClick={handleClick} to="/register" style={{ all: "unset" }}>
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
