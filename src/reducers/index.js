import { combineReducers } from "redux";
import { claimsHistoryReducer } from "./claimsHistoryReducer";
import { accountingReducer } from "./accountingReducer";
import { policyReducer } from "./policiesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  accounting: accountingReducer,
  policies: policyReducer,
  claimsHistory: claimsHistoryReducer,
  auth: authReducer
});
