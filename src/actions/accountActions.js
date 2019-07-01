import { FETCH_ACCOUNTS } from "./actionTypes";
import insuranceApi from "../api/insurance";

export const fetchAccounts = () => async dispatch => {
  const response = await insuranceApi.get("/amount");
  dispatch({
    type: FETCH_ACCOUNTS,
    payload: response.data.bagOfMoney
  });
};

export const updateAccounts = amount => async dispatch => {
  const amountInfo = await insuranceApi.get("/amount");
  const updatedAmount = amountInfo.data.bagOfMoney + amount;
  await insuranceApi.put("/amount", { bagOfMoney: updatedAmount });
  dispatch({
    type: FETCH_ACCOUNTS,
    payload: updatedAmount
  });
};
