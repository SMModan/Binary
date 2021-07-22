import axios from "axios";
import {
  FORGOT_PASSWORD_SERVICE,
  LOGIN_SERVICE,
  SIGNUP_SERVICE,
} from "../../service/apiEndpoints";
import { apiCall, METHOD } from "../../service/baseApiCall";
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  LOGOUT,
} from "../constants/action-types";

export const login = (data) => (dispatch) => {
  dispatch(loginInit(data));
};
const loginInit = (data) => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_INITLIZATION,
  });
  apiCall(
    LOGIN_SERVICE,
    data,
    (res) => dispatch(loginSuccess(res)),
    (err) => dispatch(loginError(err)),
    METHOD.POST,
    {}
  );
};
const loginSuccess = () => (dispatch) => {
  localStorage.setItem("login", "Success");
  dispatch({
    type: LOGIN.LOGIN_SUCCESS,
  });
};
const loginError = () => (dispatch) => {
  dispatch({
    type: LOGIN.LOGIN_ERORR,
  });
};
export const register = (data) => (dispatch) => {
  const { email, Company_name, password, Industry_ID, Employee_size } = data;
  const registerData = {
    Company_name,
    email,
    password,
    //Company_logo:,
    Industry_ID,
    // Employee_size: Employee_size.toString(),
    BR_No: "Test BR",
    BR_Proof: "",
    BR_Verified: "1",
    BR_Verification_Complete_date: "2021-07-20 17:38:16",
    Revenue_class: "9",
    Revenue_source: "8",
    Default_currency: "1",
    Accounting_SW_status: "1",
    Accounting_SW_type: "1",
    Accounting_SW_ID: "Test",
  };
  // axios
  //   .post("http://18.188.8.195:3100/v1/company/signUp", registerData)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
  // var formData = new FormData();

  // for (var key in registerData) {
  //   formData.append(key, registerData[key]);
  // }
  dispatch(registerInit(registerData));
};
const registerInit = (data) => (dispatch) => {
  dispatch({
    type: REGISTER.REGISTER_INITLIZATION,
  });
  apiCall(
    SIGNUP_SERVICE,
    data,
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
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT.LOGOUT_INITLIZATION,
  });
};
export const forgotPassword = (data) => (dispatch) => {
  dispatch(forgotPasswordInit(data));
};
const forgotPasswordInit = (data) => (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION,
  });
  apiCall(
    FORGOT_PASSWORD_SERVICE,
    data,
    (res) => dispatch(forgotPasswordSuccess(res)),
    (err) => dispatch(forgotPasswordError(err)),
    METHOD.POST,
    {}
  );
};
const forgotPasswordSuccess = () => (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS,
  });
};
const forgotPasswordError = () => (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR,
  });
};
