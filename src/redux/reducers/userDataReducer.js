
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  LOGOUT,
  VERIFY_OTP_ACTION,
} from "../constants/action-types";

const initialState = {
  loading: false,
  isLoggedin: !!localStorage.getItem("login"),
  isRegisterd: false,
  isForgotpasswordSuccess: false,
  isOTPVerify:false
};
export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case LOGIN.LOGIN_INITLIZATION:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoggedin: true,
        loading: false,
      };
    case LOGIN.LOGIN_ERORR:
      return {
        ...state,
        ...payload,
        isLoggedin: false,
      };
    case LOGOUT.LOGOUT_INITLIZATION:
      return {
        ...state,
        ...payload,
        isLoggedin: false,
        loading: false,
      };
    case REGISTER.REGISTER_INITLIZATION:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case REGISTER.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isRegisterd: true,
        loading: false,
      };
    case REGISTER.REGISTER_ERORR:
      return {
        ...state,
        ...payload,
        isRegisterd: false,
        loading: false,
      };
    case FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        ...payload,
        isForgotpasswordSuccess: true,
        loading: false,
      };
    case FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR:
      return {
        ...state,
        ...payload,
        isForgotpasswordSuccess: false,
        loading: false,
      };
    case VERIFY_OTP_ACTION.VERIFY_OTP_ACTION_SUCCESS:
      return {
        ...state,isOTPVerify:true
     
      };
    default:
      return state;
  }
};
