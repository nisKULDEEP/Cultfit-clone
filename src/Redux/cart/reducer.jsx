import { ADD_TO_CART } from "./action";
import { REMOVE_CART } from "./action";

// {
//   id: 0,
//   title : "",
//   img : "",
//   price: ""
// }
let initialValue = [];
export const addToCartReducer = (value = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...value,
        payload,
      };
    // case REMOVE_CART:
    //   return
    default:
      return value;
  }
};
