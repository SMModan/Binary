import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import ProductsReducer from "./ProductsReducer";
import PlanReducer from "./PlanReducer";

// Combine all reducers as root reducer
export default combineReducers({
  userDataReducer,
  ProductsReducer,
  PlanReducer
});
