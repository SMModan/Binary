import {
  ADD_DATA,
  DELETE_DATA_BY_INDEX,
  EDIT_DATA,
  GET_ALL_DATA,
} from "../constants/action-types";

const initialState = [];
export default (state = initialState, { type, payload, index }) => {
  switch (type) {
    case ADD_DATA:
      let changedState = [...state, payload];
      return changedState;
    case EDIT_DATA:
      let tempData = state;
      tempData[index] = {
        ...tempData[index],
        ...payload,
      };
      return tempData;
    case DELETE_DATA_BY_INDEX:
      let afterDelete = state.filter((d, i) => i != payload);
      return afterDelete;
    case GET_ALL_DATA:
      return payload
    default:
      return state;
  }
};
