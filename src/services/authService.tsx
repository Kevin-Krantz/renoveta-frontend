import http from "./httpService";
import jwtDecode from "jwt-decode";
import config from "../config.json";

const tokenKey = "token";
const authApi = config.apiEndpoint + "/auth";

http.setAuthHeader(getJwt());

async function login({ user }: any) {
  const data = {
    email: user.username,

    password: user.password,
  };
  const { data: jwt } = await http.post(authApi, data);
  localStorage.setItem(tokenKey, jwt);
}

function loginWithJwt({ jwt }: any) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function getCurrentUser() {
  try {
    const { token }: any = getJwt();
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
}
export default {
  login,
  loginWithJwt,
  logout,
  getJwt,
  getCurrentUser,
};
