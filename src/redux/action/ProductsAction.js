import { apiCall, METHOD } from "../../service/baseApiCall";
import { PRODUCT_LIST } from "../../service/apiEndpoints";
import { GET_PRODUCT_LIST } from "../constants/action-types";

export const getProducts = (payload) => (dispacth) =>
  dispacth(getProductsInit());

const getProductsInit = () => (dispacth) => {
  dispacth({
    type: GET_PRODUCT_LIST.GET_PRODUCT_LIST_INITLIZATION,
    // payload,
  });
  apiCall(
    PRODUCT_LIST,
    {},
    (res) => console.log(res),
    (err) => console.log(err),
    METHOD.GET,
    {
      addAuthrize: true,
    }
  );
};
const getProductsSuccess = (payload) => (dispacth) => {
  dispacth({
    type: GET_PRODUCT_LIST.GET_PRODUCT_LIST_SUCCESS,
    payload,
  });
};
const getProductsError = () => (dispacth) => {
  dispacth({
    type: GET_PRODUCT_LIST.GET_PRODUCT_LIST_ERORR,
    payload,
  });
};
