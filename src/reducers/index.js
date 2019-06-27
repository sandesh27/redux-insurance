import { combineReducers } from "redux";
import { claimsHistoryReducer } from "./claimsHistoryReducer";
import { accountingReducer } from "./accountingReducer";
import { policyReducer } from "./policiesReducer";

export default combineReducers({
  accounting: accountingReducer,
  policies: policyReducer,
  claimsHistory: claimsHistoryReducer
});
