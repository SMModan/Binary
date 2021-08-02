import { GET_PLAN_LIST } from "../constants/action-types";
const initialState = {
  planList: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLAN_LIST.GET_PLAN_LIST_INITLIZATION:
      return { ...state, loading: true };
    case GET_PLAN_LIST.GET_PLAN_LIST_SUCCESS:
      return { ...state, planList: payload, loading: false };
    case GET_PLAN_LIST.GET_PLAN_LIST_ERORR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
