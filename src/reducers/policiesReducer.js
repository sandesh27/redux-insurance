import {
  CREATE_POLICY,
  DELETE_POLICY,
  FETCH_POLICIES
} from "../actions/actionTypes";

const policiesReducer = (listOfPolicies = [], action) => {
  if (action.type === CREATE_POLICY) {
    return [...listOfPolicies, action.payload];
  } else if (action.type === DELETE_POLICY) {
    return listOfPolicies.filter(policy => policy.id !== action.payload.id);
  } else if (action.type === FETCH_POLICIES) {
    return [...listOfPolicies, ...action.payload.policies];
  }

  return listOfPolicies;
};

export default policiesReducer;
