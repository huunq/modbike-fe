import { appAxios } from "../lib/axios";

export const apiFetchUser = (data) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/user`, data);
};

export const apiFetchAllUser = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/users`);
};
