import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER
} from "./actionTypes";
import { authenticateUser } from "../api/auth";

const loginInProgress = () => {
  return { type: LOGIN_USER };
};

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};

const loginFailed = () => {
  return { type: LOGIN_FAILED };
};

const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const LoginUser = (userid, password, cb) => async dispatch => {
  dispatch(loginInProgress());
  try {
    const response = await authenticateUser(userid, password);
    dispatch(loginSuccess(response));
    cb();
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const LogoutUser = cb => dispatch => {
  dispatch(logoutUser());
  cb();
};
