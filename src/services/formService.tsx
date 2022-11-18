import http from "./httpService";
import config from "../config.json";

const formApi = config.apiEndpoint + "/forms";

async function getForm() {
  const form = await http.get(formApi);
  return form.data;
}

export default getForm;
