import { CREATE_POLICY, DELETE_POLICY, FETCH_POLICIES } from "./actionTypes";
import insuranceApi from "../api/insurance";

export const createPolicy = (name, amount, dateOfJoining) => async dispatch => {
  await insuranceApi.post("/policies", {
    name: name,
    premium: amount,
    dateOfJoining: dateOfJoining
  });
  dispatch({
    type: CREATE_POLICY,
    payload: {
      name: name,
      premium: amount,
      dateOfJoining: dateOfJoining
    }
  });
};

export const deletePolicy = id => async dispatch => {
  await insuranceApi.delete(`/policies/${id}`);
  dispatch({
    type: DELETE_POLICY,
    payload: {
      id: id
    }
  });
};

export const fetchPolicies = () => async dispatch => {
  const response = await insuranceApi.get("/policies");
  dispatch({
    type: FETCH_POLICIES,
    payload: {
      policies: response.data
    }
  });
};
