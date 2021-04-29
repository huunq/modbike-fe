import axios from "axios";
import Cookies from "js-cookie";

import { logAxiosError } from "./logger";

export function appAxios() {
  const axiosInstance = axios.create({
    timeout: process.env.REACT_APP_AXIOS_TIMEOUT,
    headers: {
      Authorization: `Bearer ${Cookies.get(
        process.env.REACT_APP_ACCESS_TOKEN_NAME
      )}`,
    },
  });

  axiosInstance.interceptors.request.use(
    async function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(null, function (error) {
    if (error.config) {
      logAxiosError(error);
    }

    return Promise.reject(error);
  });

  return axiosInstance;
}

export const multipartHeader = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
