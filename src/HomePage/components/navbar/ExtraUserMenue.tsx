import { Link } from "react-router-dom";
import Button from "../../../common/Button";
import { ScrollToTop } from "../../../common/ScrollToTop";

function ExtraUserMenue() {
  return (
    <>
      <li>
        <Link onClick={ScrollToTop} to="/forms">
          Mina Sidor
        </Link>
      </li>
      <Link onClick={ScrollToTop} to="/logout" style={{ all: "unset" }}>
        <Button label="Logga ut" primary={false} type={onsubmit} />
      </Link>
    </>
  );
}

export default ExtraUserMenue;
