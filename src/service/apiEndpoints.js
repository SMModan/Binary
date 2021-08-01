// COMPANY API END POINTS
export const LOGIN_SERVICE = "/company/login";
export const SIGNUP_SERVICE = "/company/signUp";
export const FORGOT_PASSWORD_SERVICE = "/company/forgotPassword";
export const INDUSTRY_LIST_SERVICE = "/company/industryList";
export const VERIFY_OTP = "/company/verifyOtp";
export const GET_PROFILE_SERVICE = "/company/profile";
export const EDIT_PROFILE = "/company/editProfile";
export const LOGOUT_SERVICE = "/company/logout";

// PRODUCTS API END POINTS
export const PRODUCT_LIST = "/product/list";
export const PRODUCT_CREATE = "/product/create";
export const PRODUCT_UD = (id) => `/product/${id}`;
