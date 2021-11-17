import { medicineActionTypes } from "../actions/medicine";

const initialState = {
  medicineCategory: [],
  medicineSubCategory: [],
  medicineSubCategoryContent: [],
  medicineContent: [],
  medicineContentDetail: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case medicineActionTypes.MEDICINE_CATEGORY: {
      const response = action.payload.data;
      return {
        ...state,
        medicineCategory: response,
      };
    }
    case medicineActionTypes.MEDICINE_SUB_CATEGORY: {
      const response = action.payload.data;
      return {
        ...state,
        medicineSubCategory: response,
      };
    }
    case medicineActionTypes.MEDICINE_SUB_CATEGORY_CONTENT: {
      const response = action.payload.data;
      return {
        ...state,
        medicineSubCategoryContent: response,
      };
    }
    case medicineActionTypes.MEDICINE_CONTENT: {
      const response = action.payload.data;
      return {
        ...state,
        medicineContent: response,
      };
    }
    case medicineActionTypes.MEDICINE_CONTENT_DETAIL: {
      const response = action.payload.data;
      return {
        ...state,
        medicineContentDetail: response,
      };
    }
    default:
      return state;
  }
};
