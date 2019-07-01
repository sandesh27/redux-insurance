import { CREATE_CLAIM, FETCH_CLAIMS } from "../actions/actionTypes";

const claimsHistoryReducer = (oldListOfClaims = [], action) => {
  if (action.type === CREATE_CLAIM) {
    return [...oldListOfClaims, action.payload];
  } else if (action.type === FETCH_CLAIMS) {
    return [...oldListOfClaims, ...action.payload.claims];
  }

  return oldListOfClaims;
};

export default claimsHistoryReducer;
