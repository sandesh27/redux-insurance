import { combineReducers } from "redux";
import accountingReducer from "./accountingReducer";
import claimsHistoryReducer from "./claimsHistoryReducer";
import policiesReducer from "./policiesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  accounting: accountingReducer,
  claimsHistory: claimsHistoryReducer,
  policies: policiesReducer,
  auth: authReducer
});
