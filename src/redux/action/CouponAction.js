import { apiCall, METHOD } from "../../service/baseApiCall";
import {
  COUPON_CREATE,
  COUPON_LIST,
  COUPON_UD,
} from "../../service/apiEndpoints";
import {
  GET_COUPON_LIST,
  CREATE_COUPON_ACTION,
} from "../constants/action-types";
import { toast } from "react-toastify";

export const getCoupon = (payload) => (dispacth) =>
  dispacth(getCouponInit());

const getCouponInit = () => (dispacth) => {
  dispacth({
    type: GET_COUPON_LIST.GET_COUPON_LIST_INITLIZATION,
    // payload,
  });
  apiCall(
    COUPON_LIST,
    {
      start: 0,
      limit: 10,
    },
    (res) => dispacth(getCouponSuccess(res.data.list)),
    (err) => dispacth(getCouponError(err)),
    METHOD.POST,
    {
      addAuthrize: true,
    }
  );
};
const getCouponSuccess = (payload) => (dispacth) => {
  dispacth({
    type: GET_COUPON_LIST.GET_COUPON_LIST_SUCCESS,
    payload,
  });
};
const getCouponError = (payload) => (dispacth) => {
  dispacth({
    type: GET_COUPON_LIST.GET_COUPON_LIST_ERORR,
    payload,
  });
};

export const deleteCoupon = (data, isEdit = 0, setLoading, isDelete = false) => (
  dispacth
) => dispacth(createCouponInit(data, isEdit, setLoading, isDelete));

export const createCoupon = (data, isEdit = 0, setModal) => (dispacth) =>
  dispacth(createCouponInit(data, isEdit, setModal));

const createCouponInit = (data, isEdit, setModal, isDelete) => (dispacth) => {
  dispacth({
    type: CREATE_COUPON_ACTION.CREATE_COUPON_ACTION_INITLIZATION,
  });
  apiCall(
    isEdit ? COUPON_UD(isEdit) : COUPON_CREATE,
    data,
    (res) => {
      dispacth(createCouponSuccess(res.data));
      setModal(false);
    },
    (err) => {
      dispacth(createCouponError(err));
      setModal(false);
    },
    isDelete ? METHOD.DELETE : isEdit ? METHOD.PATCH : METHOD.POST,
    {
      addAuthrize: true,
    }
  );
};
const createCouponSuccess = (payload) => (dispacth) => {
  toast.success(payload.message);
  dispacth({
    type: CREATE_COUPON_ACTION.CREATE_COUPON_ACTION_SUCCESS,
    // payload,
  });
};
const createCouponError = (payload) => (dispacth) => {
  dispacth({
    type: CREATE_COUPON_ACTION.CREATE_COUPON_ACTION_ERORR,
    payload,
  });
};
