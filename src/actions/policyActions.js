import { CREATE_POLICY, DELETE_POLICY } from "./actionTypes";

//create a policy
export const createPolicy = (name, amount, dateOfJoining) => {
  return {
    type: CREATE_POLICY,
    payload: {
      name,
      premium: amount,
      dateOfJoining
    }
  };
};

//delete a policy
export const deletePolicy = name => {
  return {
    type: DELETE_POLICY,
    payload: {
      name
    }
  };
};
