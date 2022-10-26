import axios from "axios";
// import { toast } from "react-toastify";

// axios.interceptors.response.use(null, (error) => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     toast.error("Something went wrong");
//   }

//   return Promise.reject(error);
// });

function setAuthHeader(jwt: any) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  setAuthHeader,
};
