import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import { getUserForms } from "../services/formService";
import auth from "../services/authService";
import { IUser } from "../types/User";
import { ScrollToTop } from "../common/ScrollToTop";

function Form() {
  const [forms, setForms] = useState([]);

  const currentUser = auth.getCurrentUser() as IUser;
  console.log(currentUser.isAdmin);

  useEffect(() => {
    !currentUser.isAdmin && populateForms();
  }, []);

  function populateForms() {
    const fetchForms = async () => {
      const forms = await getUserForms();
      setForms(forms);
    };
    fetchForms();
  }

  // date formate to only yy-mm-dd
  // function formatDate(date: Date) {
  //   const dt = Date();
  //   const newdate = new Date(dt);

  //   if (
  //     typeof newdate === "object" &&
  //     newdate !== null &&
  //     "getDate" in newdate
  //   ) {
  //     return `${newdate.getDate()}-${
  //       newdate.getMonth() + 1
  //     }-${newdate.getFullYear()}`;
  //   } else {
  //     console.log("Invalid Date Object");
  //   }
  // }

  return (
    // <>
    <Container>
      {forms.map((form: any, i) => (
        <Table key={form._id}>
          {/* <div>{i + 1}</div> */}
          {/* <div>{formatDate(form.dateIssued)}</div> */}
          <p style={{ fontWeight: "bolder" }}>{form.renovationType}</p>
          <p>
            {form.userInfo.residence.streetAdressAndNumber}
            {form.userInfo.residence.city}
          </p>
          <Link to={"/forms/" + form._id} onClick={ScrollToTop}>
            <Button
              className="button"
              type="button"
              label="Läs mer"
              primary={true}
            />
          </Link>
        </Table>
      ))}
    </Container>
    //   <Container2>
    //     {forms.map((form: any, i) => (
    //       <Link to={"/forms/" + form._id} onClick={ScrollToTop}>
    //         <Table2 key={form._id}>
    //           {/* <div>{i + 1}</div> */}
    //           {/* <div>{formatDate(form.dateIssued)}</div> */}
    //           <div>
    //             <p style={{ fontWeight: "bolder" }}>{form.renovationType}</p>
    //             <p>
    //               {form.userInfo.residence.streetAdressAndNumber}
    //               {form.userInfo.residence.city}
    //             </p>
    //           </div>
    //         </Table2>
    //       </Link>
    //     ))}
    //   </Container2>
    // </>
  );
}

export default Form;

const Container = styled.div`
  width: auto;
  margin-bottom: 16px;
  border: 2px solid #035a4b;
  border-radius: 16px;
`;

const Table = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 600px;
  padding-left: 32px;
  padding-right: 8px;
  padding-top: 32px;
  padding-bottom: 8px;

  p.firstchild {
    margin-left: 18px;
  }
  .button {
    width: 120px;
    height: 40px;
    font-weight: bolder;
    float: right;
    margin-bottom: 8px;
    margin-right: 8px;
  }
`;

const Container2 = styled.div`
  width: auto;
  height: 400;
  margin-bottom: 16px;
  border: 2px solid #035a4b;
  border-radius: 16px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Table2 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 600px;
  padding-left: 32px;
  padding-right: 8px;
  padding-top: 32px;
  padding-bottom: 8px;

  :hover {
    background: #59bd9d;
    border-radius: 14px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
`;
