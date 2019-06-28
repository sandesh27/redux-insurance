import {
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER
} from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  loginInProgress: false,
  loginError: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        isLoggedIn: false,
        loginInProgress: true,
        loginError: ""
      });
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        isLoggedIn: false,
        loginInProgress: false,
        loginError: "Invalid credentials"
      });
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return Object.assign({}, state, {
        isLoggedIn: true,
        loginInProgress: false,
        loginError: ""
      });

    case LOGOUT_USER:
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        isLoggedIn: false,
        loginInProgress: false,
        loginError: ""
      });

    default:
      return state;
  }
};
