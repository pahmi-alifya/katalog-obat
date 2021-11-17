import { combineReducers } from "redux";
import common from "./common";
import user from "./user";
import medicine from "./medicine";

const rootReducers = combineReducers({
  common,
  user,
  medicine,
});

// const rootReducers = (state, action) => {
//   if (action.type == authActionTypes.LOGOUT) {
//     state = undefined
//   }
//   return appReducers(state, action)
// }

export default rootReducers;
