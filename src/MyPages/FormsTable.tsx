import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import { IUser } from "../types/User";
import { getUserForms, getAllForms } from "../services/formService";

interface Props {
  user?: IUser;
}
function Form({ user }: Props) {
  const [forms, setForms] = useState([]);
  const [allForms, setAllForms] = useState([]);

  useEffect(() => {
    user?.isAdmin ? populateAllForms() : populateForms();
  }, []);

  function populateForms() {
    const fetchForms = async () => {
      const forms = await getUserForms();
      console.log(forms);
      setForms(forms);
    };
    fetchForms();
  }

  function populateAllForms() {
    const fetchAllForms = async () => {
      const forms = await getAllForms();
      setAllForms(forms);
    };
    fetchAllForms();
  }

  async function handleClick() {
    console.log("testing");
    // <Link to={"/foods/:id"} />;
  }

  function formatDate(date: Date) {
    const dt = Date();
    const newdate = new Date(dt);

    if (
      typeof newdate === "object" &&
      newdate !== null &&
      "getDate" in newdate
    ) {
      return `${newdate.getDate()}-${
        newdate.getMonth() + 1
      }-${newdate.getFullYear()}`;
    } else {
      console.log("Invalid Date Object");
    }
  }

  return (
    <>
      {!user?.isAdmin && (
        <>
          <Head>
            <p>#</p>
            <p>Datum inskickat</p>
            <p>RenoveringsTyp</p>
            <></>
          </Head>
          <Container>
            {forms.map((form: any, i) => (
              <Table key={form._id}>
                <div>{i + 1}</div>
                <div>{formatDate(form.dateIssued)}</div>
                <div>{form.renovationType.join(" ")}</div>
                <Link to={"/forms/" + form._id}>
                  <Button
                    className="button"
                    type="button"
                    label="Läs mer"
                    primary={true}
                    onClick={handleClick}
                  />
                </Link>
              </Table>
            ))}
          </Container>
        </>
      )}
      {user?.isAdmin && (
        <>
          <Head>
            <p>#</p>
            <p>Datum inskickat</p>
            <p>Kund</p>
            <></>
          </Head>
          <Container>
            {allForms.map((form: any, i) => (
              <Table key={form._id}>
                <div>{i + 1}</div>
                <div>{formatDate(form.dateIssued)}</div>
                <div>{form.userInfo.name}</div>
                <Button
                  className="button"
                  type="button"
                  label="Svara"
                  primary={true}
                  onClick={handleClick}
                />
              </Table>
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default Form;

const Head = styled.div`
  width: 600px;
  margin-top: 32px;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: bolder;
`;

const Container = styled.div`
  width: 600px;
  border: 2px solid var(--bg-secondary);
  border-radius: 16px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 600px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;

  p.firstchild {
    margin-left: 18px;
  }
  .button {
    width: 65px;
    height: 25px;
  }
`;
