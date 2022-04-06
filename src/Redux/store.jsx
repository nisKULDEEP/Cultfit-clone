import { createStore } from "redux";
import { loginReducer } from "./loginDetails/reducer";
import { addToCartReducer } from "./cart/reducer";
import { combineReducers } from "redux";

const red = combineReducers({ loginReducer, addToCartReducer });
export const store = createStore(
  red,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
