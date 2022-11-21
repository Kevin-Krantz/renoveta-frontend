import http from "./httpService";
import config from "../config.json";

const formApi = config.apiEndpoint + "/forms";

//get forms
export async function getUserForms() {
  const form = await http.get(formApi + "/");
  return form.data;
}

//get all forms as admin
export async function getAllForms() {
  const forms = await http.get(formApi + "/all");
  return forms.data;
}

// get one form

// get one form
export function getUserForm(formId: string) {
  return http.get(formApi + "/" + formId);
}
