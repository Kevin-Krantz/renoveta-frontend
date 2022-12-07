import http from "./httpService";
import config from "../config.json";

const userApi = config.apiEndpoint + "/users";

async function register(user: any) {
  return await http.post(userApi, user);
}

export default {
  register
};
