import { createStore } from "redux";
import { loginReducer } from "./loginDetails/reducer";

export const store = createStore(
  loginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
