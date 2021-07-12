import { apiCall } from "../../service/baseApiCall";
import {
  ADD_DATA,
  DELETE_DATA_BY_INDEX,
  EDIT_DATA,
  GET_ALL_DATA,
} from "../constants/action-types";

export const addUserData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const editUserData = (payload, index) => ({
  type: EDIT_DATA,
  payload,
  index,
});

export const getAllData = () => dispatch => apiCall('/users', null, (payload) => dispatch(({
  type: GET_ALL_DATA,
  payload
})), err => console.log(err), 'get')

export const deleteDataByIndex = (payload) => ({
  type: DELETE_DATA_BY_INDEX,
  payload,
});
