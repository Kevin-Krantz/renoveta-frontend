import http from "./httpService";
import config from "../config.json";

const formApi = config.apiEndpoint + "/forms";

//get one form
export async function getForm() {
  const form = await http.get(formApi + "/");
  return form.data;
}

//get all forms
export async function getForms() {
  const forms = await http.get(formApi + "/all");
  return forms.data;
}
