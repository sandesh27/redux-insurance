import { CREATE_POLICY, DELETE_POLICY } from "../actions/actionTypes";

//policy reducer
export const policyReducer = (listOfPolicies = [], action) => {
  if (action.type === CREATE_POLICY) {
    return [...listOfPolicies, action.payload];
  } else if (action.type === DELETE_POLICY) {
    return listOfPolicies.filter(policy => {
      return policy.name !== action.payload.name;
    });
  }
  return listOfPolicies;
};
