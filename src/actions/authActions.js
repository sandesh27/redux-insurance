import { authenticateUser } from "../api/auth";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_IN_PROGRESS,
  LOGOUT_USER
} from "./actionTypes";

const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};

const loginFailed = () => {
  return {
    type: LOGIN_FAILED
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

const loginInProgess = () => {
  return {
    type: LOGIN_IN_PROGRESS
  };
};

export const loginUser = (username, password, cb) => async dispatch => {
  dispatch(loginInProgess());
  try {
    const response = await authenticateUser(username, password);
    dispatch(loginSuccess(response));
    cb();
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const logOutUser = cb => dispatch => {
  dispatch(logoutUser());
  cb();
};
