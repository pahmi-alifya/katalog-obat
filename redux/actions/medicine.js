import api from "../../api";
import { commonActionTypes } from "./common";

export const medicineActionTypes = {
  MEDICINE_CATEGORY: "get_medicine_category",
  MEDICINE_SUB_CATEGORY: "get_medicine_sub_category",
  MEDICINE_SUB_CATEGORY_CONTENT: "get_medicine_sub_category_content",
  MEDICINE_CONTENT: "get_medicine_content",
  MEDICINE_CONTENT_DETAIL: "get_medicine_content_detail",
};

export const getMedicineCategory = () => (dispatch) => {
  dispatch({ type: commonActionTypes.LOADING });
  api
    .post("kategori")
    .then(({ data }) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      if (data) {
        dispatch({
          type: medicineActionTypes.MEDICINE_CATEGORY,
          payload: data,
        });
        return;
      }
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
    })
    .catch((error) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      alert(error);
    });
};

export const getMedicineSubCategory = (params) => (dispatch) => {
  dispatch({ type: commonActionTypes.LOADING });
  api
    .post("sub-kategori", params)
    .then(({ data }) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      if (data?.data && data?.data?.length > 0) {
        dispatch({
          type: medicineActionTypes.MEDICINE_SUB_CATEGORY,
          payload: data,
        });
        return;
      }
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
    })
    .catch((error) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      alert(error);
    });
};

export const getMedicineSubCategoryContent = (params) => (dispatch) => {
  dispatch({ type: commonActionTypes.LOADING });
  api
    .post("sub-kategori-konten", params)
    .then(({ data }) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      if (data) {
        dispatch({
          type: medicineActionTypes.MEDICINE_SUB_CATEGORY_CONTENT,
          payload: data,
        });
        return;
      }
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
    })
    .catch((error) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      alert(error);
    });
};

export const getMedicineContent = (params) => (dispatch) => {
  dispatch({ type: commonActionTypes.LOADING });
  api
    .post(`konten/${params?.id}`, params)
    .then(({ data }) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      if (data?.data && data?.data?.length > 0) {
        dispatch({
          type: medicineActionTypes.MEDICINE_CONTENT,
          payload: data,
        });
        return;
      }
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
    })
    .catch((error) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      alert(error);
    });
};

export const getMedicineContentDetail = (id) => (dispatch) => {
  dispatch({ type: commonActionTypes.LOADING });
  api
    .post(`konten/${id}`)
    .then(({ data }) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      if (data?.data && data?.data?.length > 0) {
        dispatch({
          type: medicineActionTypes.MEDICINE_CONTENT_DETAIL,
          payload: data,
        });
        return;
      }
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
    })
    .catch((error) => {
      dispatch({ type: commonActionTypes.HIEDE_LOADING });
      alert(error);
    });
};
