// COMPANY API END POINTS
export const LOGIN_SERVICE = "/company/login";
export const SIGNUP_SERVICE = "/company/signUp";
export const FORGOT_PASSWORD_SERVICE = "/company/forgotPassword";
export const INDUSTRY_LIST_SERVICE = "/company/industryList";
export const VERIFY_OTP = "/company/verifyOtp";
export const GET_PROFILE_SERVICE = "/company/profile";
export const EDIT_PROFILE = "/company/editProfile";
export const LOGOUT_SERVICE = "/company/logout";
export const RESET_PASSWORD_SERVICE = "/company/resetpassword";

// PRODUCTS API END POINTS
export const PRODUCT_LIST = "/product/list";
export const PRODUCT_CREATE = "/product/create";
export const PRODUCT_UD = (id) => `/product/${id}`;

// PLAN API END POINTS
export const PLAN_LIST = "/plan/list";
export const PLAN_CREATE = "/plan/create";
export const PLAN_UD = (id) => `/plan/${id}`;

// COUPON API END POINTS
export const COUPON_LIST = "/coupon/list";
export const COUPON_CREATE = "/coupon/create";
export const COUPON_UD = (id) => `/coupon/${id}`;