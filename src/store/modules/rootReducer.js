import { combineReducers } from "redux";

import navbar from "./navBar/reducer";
import others from "./others/reducer";

export default combineReducers({
  navbar,
  others,
});
