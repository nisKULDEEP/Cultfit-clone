import { LOGIN_NUMBER } from "./action";

let initialValue = {
  loginDetails: null,
  loginStatus: false,
};
export const loginReducer = (value = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN_NUMBER:
      return {
        ...value,
        loginDetails: payload,
        loginStatus: true,
      };

    default:
      return value;
  }
};
