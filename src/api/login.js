import { appAxios } from "../lib/axios";

export const apiFecthLogin = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/login`, data);
};

export const apiFetchMe = (id) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/${id}`);
};
