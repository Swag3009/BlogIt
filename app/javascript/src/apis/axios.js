import { Toastr } from "@bigbinary/neetoui";
import axios from "axios";
import useAuthStore from "store/useAuthStore";

import { BASE_URL, DEFAULT_ERROR_NOTIFICATION } from "./constants";

const setAuthHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };

  const { authToken: token, authEmail: email } = useAuthStore.getState();

  if (token && email) {
    axios.defaults.headers["X-Auth-Email"] = email;
    axios.defaults.headers["X-Auth-Token"] = token;
  }
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice, {
        autoClose: 3000,
      });
    }
  }

  return response.data;
};

const handleErrorResponse = axiosErrorObject => {
  const { clearAuthData } = useAuthStore.getState();

  if (axiosErrorObject.response?.status === 401) {
    clearAuthData();
    setTimeout(() => (window.location.href = "/"), 2000);
  }

  Toastr.error(
    axiosErrorObject.response?.data?.error || DEFAULT_ERROR_NOTIFICATION
  );
  if (axiosErrorObject.response?.status === 423) {
    window.location.href = "/";
  }

  return Promise.reject(axiosErrorObject);
};

const responseInterceptor = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

export default function initializeAxios() {
  axios.defaults.baseURL = BASE_URL;
  responseInterceptor();
  setAuthHeaders();
}
