import {
  CREATE_CLAIM,
  CREATE_POLICY,
  FETCH_ACCOUNTS
} from "../actions/actionTypes";

const accountingReducer = (bagOfMoney = 100, action) => {
  if (action.type === CREATE_CLAIM) {
    return bagOfMoney - action.payload.amount;
  } else if (action.type === CREATE_POLICY) {
    return bagOfMoney + action.payload.premium;
  } else if (action.type === FETCH_ACCOUNTS) {
    return action.payload;
  }
  return bagOfMoney;
};
export default accountingReducer;
