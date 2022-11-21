import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserForm } from "../services/formService";

type RouteParams = {
  userId: string;
};

function Form() {
  const { userId } = useParams<RouteParams>();
  const [extendedForm, setExtendedForm] = useState<any>([]);

  useEffect(() => {
    async function loadUserForm() {
      if (!userId) return;
      const { data } = await getUserForm(userId);
      setExtendedForm([data]);
    }
    loadUserForm();
  }, [userId]);

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
    <div>
      <Container>
        {extendedForm.map((form: any) => (
          <Table key={form._id}>
            <tbody>
              <tr>
                <td>Datum inskickat</td>
                <td>{formatDate(form.dateIssued)}</td>
              </tr>
              <tr>
                <td>Renoverings Typ</td>
                <td>{form.renovationType.join(", ")}</td>
              </tr>
              <tr>
                <td>Typ av tak</td>
                <td>{form.typeOfRoof}</td>
              </tr>
              <tr>
                <td>Tak material</td>
                <td>{form.roofMaterial}</td>
              </tr>
              <tr>
                <td>Husets takvinkel</td>
                <td>{form.roofAngle}</td>
              </tr>
              <tr>
                <td> Husets mått längd/bredd</td>
                <td>
                  {form.houseMeasurements.length} &
                  {form.houseMeasurements.width}
                </td>
              </tr>
              <tr>
                <td>Frågor/funderingar</td>
              </tr>
              <tr>
                <td>Bifogade bilder/bilagor</td>
              </tr>
              <tr>
                <td>E-post</td>
                <td>{form.userInfo.email}</td>
              </tr>
              <tr>
                <td>Telefonnummer</td>
                <td>{form.userInfo.phone}</td>
              </tr>
              <tr>
                <td>Namn</td>
                <td>{form.userInfo.name}</td>
              </tr>
              <tr>
                <td>Efternamn</td>
                <td>{form.userInfo.lastName}</td>
              </tr>
              <tr>
                <td>Din Bostad</td>
                <td>
                  {form.userInfo.residence.streetAdressAndNumber}
                  {form.userInfo.residence.propertyDesignation}
                  {form.userInfo.residence.city}
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </Container>
      {extendedForm.map((form: any) =>
        form.adminResponse ? (
          <Test>
            <div className="container">
              <img
                src="/logo/renoveta-logo--forrest-symbol-540.png"
                alt="Avatar"
              />
              {extendedForm.map((form: any) => (
                <p>{form.adminResponse}</p>
              ))}
              <br />
              <span className="time-right">
                {new Date().toLocaleString() + ""}
              </span>
            </div>
          </Test>
        ) : (
          <Test>
            <div className="container">
              <img
                src="/logo/renoveta-logo--forrest-symbol-540.png"
                alt="Avatar"
              />
              {extendedForm.map((form: any) => (
                <p>Vi ser över ditt ärende och du kommer att se svaret här!</p>
              ))}
              <br />
              <span className="time-right">
                {new Date().toLocaleString() + ""}
              </span>
            </div>
          </Test>
        )
      )}
    </div>
  );
}

const Test = styled.div`
  position: absolute;
  right: 400px;
  top: 130px;

  /* Chat containers */
  .container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
  }

  /* Clear floats */
  .container::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Style images */
  .container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
  }

  /* Style time text */
  .time-right {
    float: right;
    color: #aaa;
  }
`;

const Container = styled.div`
  width: 600px;
  border: 2px solid var(--bg-secondary);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 18px;
  padding-left: 18px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #035a4c20;
  }

  tbody,
  tr.active-row {
    font-weight: bold;
    color: #015a4b;
  }
`;

export default Form;
