import { Link } from "react-router-dom";
import Button from "../../../common/Button";
import { ScrollToTop } from "../../../common/ScrollToTop";

function ExtraNotUserMenue() {
  return (
    <>
      <li>
        <Link onClick={ScrollToTop} to="/login">
          Logga in
        </Link>
      </li>
      <Link onClick={ScrollToTop} to="/renovetaform" style={{ all: "unset" }}>
        <Button label="Börja Renoveta" primary={false} type={onsubmit} />
      </Link>
    </>
  );
}

export default ExtraNotUserMenue;
