import { appAxios } from "../lib/axios";

export const apiFetchAllHistory = (data) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/history`, data);
};

export const apiCreateHistory = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/history`, data);
};

export const apiUpdateHistory = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/history`, data);
};
