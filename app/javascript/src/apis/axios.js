import axios from "axios";

import { BASE_URL } from "./constants";

const setAuthHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = localStorage.getItem("authToken");
  const email = localStorage.getItem("authEmail");
  if (token && email) {
    axios.defaults.headers["X-Auth-Email"] = email;
    axios.defaults.headers["X-Auth-Token"] = token;
  }
};

const responseInterceptor = () => {
  axios.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  );
};

export default function initializeAxios() {
  axios.defaults.baseURL = BASE_URL;
  setAuthHeaders();
  responseInterceptor();
}
