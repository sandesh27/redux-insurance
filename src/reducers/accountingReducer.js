import { CREATE_CLAIM, CREATE_POLICY } from "../actions/actionTypes";

//account reducer
export const accountingReducer = (bagOfMoney = 100, action) => {
  if (action.type === CREATE_CLAIM) {
    return bagOfMoney - action.payload.claimAmount;
  } else if (action.type === CREATE_POLICY) {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};
