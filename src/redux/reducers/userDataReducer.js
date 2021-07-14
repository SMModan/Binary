import { LOGIN, REGISTER } from "../constants/action-types";

const initialState = {
  loading: false,
  isLoggedin: false,
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
        loading: false,
      };
    default:
      return state;
  }
};
