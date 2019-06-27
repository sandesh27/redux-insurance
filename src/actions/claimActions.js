import { CREATE_CLAIM } from "./actionTypes";

//create a claim
export const createClaim = (name, claimAmount) => {
  return {
    type: CREATE_CLAIM,
    payload: {
      name,
      claimAmount
    }
  };
};
