import { CREATE_CLAIM } from "../actions/actionTypes";

//claims reducer
export const claimsHistoryReducer = (oldClaimsList = [], action) => {
  if (action.type === CREATE_CLAIM) {
    return [...oldClaimsList, action.payload];
  }
  return oldClaimsList;
};
