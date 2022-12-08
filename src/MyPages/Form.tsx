import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserForm } from "../services/formService";
import { putUserForm } from "../services/formService";
import Button from "../common/Button";
import axios from "axios";
import auth from "../services/authService";

interface IForm {
  _id: string;
  user: any;
  renovationType: RenovationType[];
  extraRenovationRequirements: string;
  typeOfRoof: TypeOfRoof[];
  roofMaterial: RoofMaterial[];
  roofAngle: number;
  houseMeasurements: HouseMeasurements;
  questions: string;
  fileUpload: string; // måste kunna ladda upp på något sätt
  userInfo: UserInfo;
  adminResponse?: string;
  dateIssued: Date;
}

interface HouseMeasurements {
  length: number;
  width: number;
}

interface UserInfo {
  email: string;
  phone: number;
  name: string;
  password: string;
  residence: Residence;
  wantToRegister: boolean;
  signAgreement: boolean;
}

interface Residence {
  streetAdressAndNumber: string;
  propertyDesignation: string;
  city: string;
}

enum RenovationType {
  SHEETMETALWORK = "Sheetmetalwork",
  REEROOFING = "Reroofing",
  ROOFRENOVATION = "Roofrenovation",
  ROOFREPLACEMENT = "Roofreplacement",
  ROOFWASHING = "Roofwashing",
  OTHER = "Other",
}

enum RoofMaterial {
  BRICK = "Brick",
  SHEETMETAL = "Sheet Metal",
  ETERNIT = "Eternit",
  ROOFINGFELT = "Roofing Felt",
  ROOFSHINGLE = "Roof Shingle",
  OTHER = "Other",
}

enum TypeOfRoof {
  GABLEROOF = "Gableroof",
  SHEDROOF = "Shedroof",
  HIPROOF = "Hiproof",
  MANSARDROOF = "Mansardroof",
  BUTTERFLYROOF = "Butterflyroof",
  FLATROOF = "Flatroof",
  OTHER = "Other",
}

type RouteParams = {
  userId: string;
};

function Form() {
  const { userId } = useParams<RouteParams>();
  const [extendedForm, setExtendedForm] = useState<any>([]);
  const [input, setInput] = useState<string>("");

  // async function handleUpdate(form: any) {
  //   form = {};
  //   form.adminResponse = input;
  //   setExtendedForm(form);
  //   const result = await axios.patch(
  //     "http://localhost:8000/api/forms" + "/" + userId,
  //     form
  //   );
  //   return result;
  // }

  const currentUser = auth.getCurrentUser() as any;

  async function handleSubmit() {
    const form = {} as IForm;
    form.adminResponse = input;

    try {
      await axios.patch("http://localhost:8000/api/forms" + "/" + userId, form);
    } catch (error) {
      console.log(error);
    }

    const forms = [...extendedForm];
    const index = forms.indexOf(form);
    forms[index] = { ...form };
    setExtendedForm(input);
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  useEffect(() => {
    async function loadUserForm() {
      if (!userId) return;
      const { data } = await getUserForm(userId);
      setExtendedForm([data as IForm]);
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
    <Parent>
      <Container>
        {extendedForm.map((form: IForm) => (
          <Table key={form._id}>
            <tbody>
              <tr>
                <td>Datum inskickat</td>
                <td>{formatDate(form.dateIssued)}</td>
              </tr>
              <tr>
                <td>Renoverings Typ</td>
                <td>{form.renovationType}</td>
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
                <td>{form.questions}</td>
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
      {currentUser.isAdmin
        ? extendedForm.map((form: IForm) => (
            <Test key={form._id}>
              <div className="container">
                <img
                  src="/logo/renoveta-logo--forrest-symbol-540.png"
                  alt="Avatar"
                />
                {extendedForm.map((form: IForm) => (
                  <p key={form._id}>{form.adminResponse}</p>
                ))}
                <span className="time-right">
                  {new Date().toLocaleString() + ""}
                </span>
              </div>
              {form.adminResponse ? (
                <AdminForm>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Ändra ditt svar"
                      value={input}
                      onChange={onInputChange}
                    />
                    <Button
                      label="Ändra"
                      type="submit"
                      className="submit"
                      primary={true}
                    />
                  </form>
                </AdminForm>
              ) : (
                <AdminForm>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Skriv ditt svar"
                      value={input}
                      onChange={onInputChange}
                    />
                    <Button
                      label="Svara"
                      type="submit"
                      className="submit"
                      primary={true}
                    />
                  </form>
                </AdminForm>
              )}
            </Test>
          ))
        : extendedForm.map((form: IForm) => (
            <Test key={form._id}>
              <div className="container">
                <img
                  src="/logo/renoveta-logo--forrest-symbol-540.png"
                  alt="Avatar"
                />
                {extendedForm.map((form: IForm) => (
                  <p key={form._id}>{form.adminResponse}</p>
                ))}
                <span className="time-right">
                  {new Date().toLocaleString() + ""}
                </span>
              </div>
            </Test>
          ))}
    </Parent>
  );
}

const Parent = styled.div`
  display: flex;
`;

const Test = styled.div`
  flex: 1;
  @media screen and (max-width: 1500px) {
    right: 150px;
  }
  .container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin: 16px 16px;
    padding: 16px 16px;
    width: 600px;
  }
  .container::after {
    content: "";
    clear: both;
    display: table;
  }
  p {
    word-wrap: break-word;
  }
  .container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
  }
  .time-right {
    float: right;
    color: #aaa;
  }
  button {
    background-color: var(--bg-color);
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
`;

const Container = styled.div`
  width: 544px;
  border: 2px solid var(--bg-secondary);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 8px;
  padding-left: 8px;
  margin-left: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  th,
  td {
    padding: 8px 8px;
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

const AdminForm = styled.div`
  input {
    width: 400px;
    padding: 12px 20px;
    margin-left: 16px;
    margin-right: 16px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export default Form;
