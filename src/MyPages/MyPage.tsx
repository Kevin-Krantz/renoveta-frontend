import { useEffect, useState } from "react";
import auth from "../services/authService";
import getForm from "../services/formService";

function MyPage() {
  const [form, setForm] = useState<any>([]);
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
    async function fetchForm() {
      const form = await getForm();
      return setForm(form);
    }
    fetchForm();
  }, []);

  return (
    <>
      <div>My Page</div>
      <div>
        {form.map((f: any) => (
          <ul key={f._id}>
            <li>{"Hej! " + user.name}</li>
            <li>{}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default MyPage;
