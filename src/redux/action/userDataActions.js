import { apiCall, METHOD } from "../../service/baseApiCall";
import { LOGIN, REGISTER } from "../constants/action-types";

export const login = () => (dispatch) => {
  dispatch(loginInit());
};
const loginInit = () => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_INITLIZATION,
  });
  apiCall(
    "/8fea97ad-7e15-40f9-8ad0-7d0db49bedb1",
    {},
    (res) => dispatch(loginSuccess(res)),
    (err) => dispatch(loginError(err)),
    METHOD.POST,
    {}
  );
};
const loginSuccess = () => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_SUCCESS,
  });
};
const loginError = () => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_ERORR,
  });
};
export const register = () => (dispatch) => {
  dispatch(registerInit());
};
const registerInit = () => (dispatch) => {
  dispatch({
    type: REGISTER.REGISTER_INITLIZATION,
  });
  apiCall(
    "/8fea97ad-7e15-40f9-8ad0-7d0db49bedb1",
    {},
    (res) => dispatch(registerSuccess(res)),
    (err) => dispatch(registerError(err)),
    METHOD.POST,
    {}
  );
};
const registerSuccess = () => (dispatch) => {
  dispatch({
    type: REGISTER.REGISTER_SUCCESS,
  });
};
const registerError = () => (dispatch) => {
  dispatch({
    type: REGISTER.REGISTER_ERORR,
  });
};

