import { CREATE_CLAIM, FETCH_CLAIMS } from "./actionTypes";
import insuranceApi from "../api/insurance";

export const createClaim = (name, amountOfMoneyToCollect) => async dispatch => {
  await insuranceApi.post("/claims", {
    name: name,
    amount: amountOfMoneyToCollect
  });
  dispatch({
    type: CREATE_CLAIM,
    payload: {
      name: name,
      amount: amountOfMoneyToCollect
    }
  });
};

export const fetchClaims = () => async dispatch => {
  const response = await insuranceApi.get("/claims");
  dispatch({
    type: FETCH_CLAIMS,
    payload: {
      claims: response.data
    }
  });
};
