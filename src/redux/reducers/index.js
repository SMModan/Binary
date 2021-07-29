import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import ProductsReducer from "./ProductsReducer";

// Combine all reducers as root reducer
export default combineReducers({
  userDataReducer,
  ProductsReducer
});
