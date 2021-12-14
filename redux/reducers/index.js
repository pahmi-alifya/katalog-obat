import { combineReducers } from "redux";
import common from "./common";

const rootReducers = combineReducers({
  common,
});

// const rootReducers = (state, action) => {
//   if (action.type == authActionTypes.LOGOUT) {
//     state = undefined
//   }
//   return appReducers(state, action)
// }

export default rootReducers;
