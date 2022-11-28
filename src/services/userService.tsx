import http from "./httpService";
import auth from "./authService";
import config from "../config.json";

const userApi = config.apiEndpoint + "/users";

async function register(user: any) {
  const { data, headers } = await http.post(userApi, user);
  auth.loginWithJwt(headers["x-auth-token"]);
  return data;
}

export default {
  register,
};
