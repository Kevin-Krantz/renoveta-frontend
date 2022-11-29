import { RenovationType } from "./RenovationType";
import { TypeOfRoof } from "./TypeOfRoof";
import { RoofMaterial } from "./RoofMaterial";

export interface IForm {
  user: any;
  renovationType: string;
  extraRenovationRequirements: string;
  typeOfRoof: string;
  roofMaterial: string;
  roofAngle: string;
  propertyWidth: string,
  propertyLength: string,
  questions: string;
  fileUpload: string; // måste kunna ladda upp på något sätt
  userInfo: UserInfo;
  dateIssued: Date;
}

export interface HouseMeasurements {
  length: number;
  width: number;
}

export interface UserInfo {
  email: string;
  phone: number;
  name: string;
  lastName: string;
  residence: Residence;
  wantToRegister: boolean;
  signAgreement: boolean;
}

export interface Residence {
  streetAdressAndNumber: string;
  propertyDesignation: string;
  city: string;
}
