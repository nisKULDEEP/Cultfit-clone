import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartDetails = useSelector((cart) => cart.addToCartReducer.payload);
  console.log(cartDetails);
  return (
    <>
      <div className="cart-body">
        <div>Your Cart</div>
        <div>cultsport</div>
        <hr />
        {cartDetails == undefined ? (
          <div style={{ textAlign: "center", fontWeigth: "500" }}>
            Cart is empty
          </div>
        ) : (
          <div className="cart-body__products">
            <img src={cartDetails.imageUrl[0]} alt="" />
            <h3>{cartDetails.title}</h3>
            <p>Price: ₹{cartDetails.price}</p>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              PAY NOW
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
