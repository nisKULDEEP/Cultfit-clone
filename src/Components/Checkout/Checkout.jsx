import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

const Mind = () => {
  const [loading__Status, setLoading__Status] = useState(true);
  const navigate = useNavigate();
  const cartDetails = useSelector((cart) => cart.addToCartReducer.payload);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return loading__Status ? (
    <div className="loading__Screen">
      {" "}
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <div>
      <Navbar path="" />

      <div className="checkout-body">
        {cartDetails == undefined ? (
          <div style={{ textAlign: "center", fontWeigth: "500" }}>
            Cart is empty
          </div>
        ) : (
          <div className="checkout-body__container">
            <div className="checkout-body__container_productDetails">
              <div className="checkout-body__container_productDetails_product">
                <img
                  src={cartDetails.imageUrl[0]}
                  alt=""
                  className="checkout-img"
                />
                <h3>{cartDetails.title}</h3>
                <p>Price: ₹{cartDetails.price}</p>
              </div>
              <div>
                <h3>Total Price : ₹{cartDetails.price}</h3>
              </div>
            </div>
            <div className="checkout-body__container_personalDetails">
              <h1>
                <i class="fas fa-shipping-fast"></i>
                Shipping Details
              </h1>
              <div class="name">
                <div>
                  <label for="f-name">First</label>
                  <input type="text" name="f-name" />
                </div>
                <div>
                  <label for="l-name">Last</label>
                  <input type="text" name="l-name" />
                </div>
              </div>
              <div class="street">
                <label for="name">Street</label>
                <input type="text" name="address" />
              </div>
              <div class="address-info">
                <div>
                  <label for="city">City</label>
                  <input type="text" name="city" />
                </div>
                <div>
                  <label for="state">State</label>
                  <input type="text" name="state" />
                </div>
                <div>
                  <label for="zip">Zip</label>
                  <input type="text" name="zip" />
                </div>
              </div>
              <h1>
                <i class="far fa-credit-card"></i> Payment Information
              </h1>
              <div class="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input type="text" name="card-num" />
              </div>
              <div class="cc-info">
                <div>
                  <label for="card-num">Exp</label>
                  <input type="text" name="expire" />
                </div>
                <div>
                  <label for="card-num">CCV</label>
                  <input type="text" name="security" />
                </div>
              </div>
              <div class="btns">
                <button>Purchase</button>
                <button>Back to cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mind;
