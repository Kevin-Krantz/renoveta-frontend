import { IForm } from "../types/Form";

interface Props {
  form: IForm;
}

const form = {
  id: 1,
  user: "Jade",
  renovationType: "Washing",
  typeOfRoof: "Something",
  roofMaterial: "Metall",
  roofAngle: 80,
  houseMeasurements: { length: 80, width: 80 },
  questions: "",
  extraRenovationRequirements: "",
  userInfo: { firstname: "Jade", lastname: "Lu" },
};

function DataTable({ form }: Props) {
  return (
    <div>
      {/* <div>{form.dateIssued}</div>
      <div>{form.renovationType}</div>
      <div>{form.typeOfRoof}</div>
      <div>{form.roofMaterial}</div>
      <div>{form.roofAngle}</div>
      <div>{form.houseMeasurements}</div>
      <div>{form.questions}</div>
      <div>{form.fileUpload}</div>
      <div>{form.userInfo}</div> */}
    </div>
  );
}

export default DataTable;
