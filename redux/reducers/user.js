import { userActionTypes } from "../actions/user";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.POST_LOGIN: {
      const response = action.payload.data;
      return {
        ...state,
        user: response,
        isLoggedIn: true,
      };
    }
    case userActionTypes.POST_LOGOUT: {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
