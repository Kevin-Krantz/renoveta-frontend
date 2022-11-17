import { useEffect, useState } from "react";
import auth from "../../services/authService";
import Form from "../Form";

function MyPage() {
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <>
      <div>My Page</div>
      <div>{"Hej! " + user.name}</div>
      <Form />
    </>
  );
}

export default MyPage;
