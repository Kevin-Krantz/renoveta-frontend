import http from "./httpService";

import config from "../config.json";

const userApi = config.apiEndpoint + "/users";

function register(user: any) {
  return http.post(userApi, user);
}

export default {
  register,
};
