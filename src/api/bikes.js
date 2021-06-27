import { appAxios } from "../lib/axios";

export const apiFetchBikeById = (data) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/bike/${data}`);
};

export const apiFetchBikes = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/bikes`);
};

export const apiBikeBorrow = (data, body) => {
  return appAxios().put(
    `${process.env.REACT_APP_BACKEND}/bikes/borrow/${data}`,
    body
  );
};

export const apiBikeReturn = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/bikes/return`, data);
};

export const apiBikeEditById = (data, id) => {
  return appAxios().put(
    `${process.env.REACT_APP_BACKEND}/bikes/${id}/edit`,
    data
  );
};

export const apiBikeDeleteById = (id) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/bikes/${id}/remove`);
};

export const apiCreateBike = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/bikes/create`, data);
};

export const apiBikeTypes = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/bikes/types`);
};

export const apiBranch = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/bikes/branch`);
};
