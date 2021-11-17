import api from "../../api";
import { commonActionTypes } from "./common";

export const userActionTypes = {
  POST_LOGIN: "post_login_auth",
  GET_PROFILE: "get_profile",
  POST_LOGOUT: "post_logout",
};

export const postLogin = (params) => (dispatch) =>
  new Promise(function (resolve, reject) {
    dispatch({ type: commonActionTypes.LOADING });
    api
      .post("masuk", params)
      .then(({ data }) => {
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
        if (data) {
          dispatch({
            type: userActionTypes.POST_LOGIN,
            payload: data,
          });
          resolve(data);
        }
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
      })
      .catch(({ message }) => {
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
        alert(message);
      });
  });

export const getProfile = (params) => (dispatch) =>
  new Promise(function (resolve, reject) {
    dispatch({ type: commonActionTypes.LOADING });
    api
      .post("profil", params)
      .then(({ data }) => {
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
        if (data) {
          dispatch({
            type: userActionTypes.GET_PROFILE,
            payload: data,
          });
          resolve(data);
        }
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
      })
      .catch(({ message }) => {
        dispatch({ type: commonActionTypes.HIEDE_LOADING });
        alert(message);
      });
  });

export const postLogout = () => (dispatch) => {
  dispatch({
    type: userActionTypes.POST_LOGOUT,
  });
};
