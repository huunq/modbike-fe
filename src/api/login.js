import { appAxios } from "../libs/axios";

export const apiFecthLogin = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/login`, data);
};

export const apiFetchMe = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/me`)
}