import { IForm } from "../types/Form";
import { useState, useEffect } from "react";
import { getUserForm } from "../services/formService";
import { useParams } from "react-router-dom";

interface Props {
  form: IForm;
}

interface IMapToViewModel {
  id: string;
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
  const [formData, setFormData] = useState();
  const params = useParams();

  useEffect(() => {
    populateForm();
  });

  async function populateForm() {
    try {
      const formId = params._id;
      const { data: form } = await getUserForm(formId);

      setFormData({ data: mapToViewModel(form) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        location.replace("/notfound");
    }
  }

  function mapToViewModel<IMapToViewModel>(form: any) {
    return {
      _id: form._id,
      renovationType: form.renovationType,
      typeOfRoof: form.typeOfRoof,
      roofMaterial: form.roofMaterial,
      roofAngle: form.roofAngle,
      houseMeasurements: form.houseMeasurements,
      questions: form.houseMeasurements,
      file: form.houseMeasurements,
      userInfo: form.houseMeasurements,
    };
  }

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
