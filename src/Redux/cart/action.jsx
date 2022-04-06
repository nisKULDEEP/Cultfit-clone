export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART = "REMOVE_CART";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
