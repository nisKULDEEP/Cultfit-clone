import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import { Footer } from "../index";
// import lottie from "lottie-web";

const Mind = () => {
  const [loading__Status, setLoading__Status] = useState(true);
  const navigate = useNavigate();
  const cartDetails = useSelector((cart) => cart.addToCartReducer.payload);
  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: true,
  //     animationData: "../../Assets/images/complete.json",
  //   });
  // }, []);
  const [orderComplete, setOrderComplete] = useState(false);

  // useEffect(() => {
  //   let i = setInterval(() => {
  //     // setOrderComplete(false);
  //     navigate("/");
  //   }, 10000);

  //   return () => {
  //     clearInterval(i);
  //   };
  // }, [setOrderComplete]);

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
          <>
            {orderComplete ? (
              <div className="container">
                <img
                  src="https://i.pinimg.com/originals/04/6a/3e/046a3ec0062120123e8316f583d5c25e.gif"
                  alt=""
                />
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
                  <h2>
                    <i className="fas fa-shipping-fast"></i>
                    Shipping Details
                  </h2>
                  <div className="name">
                    <div>
                      <label htmlFor="f-name">First Name</label>
                      <input
                        type="text"
                        name="f-name"
                        placeholder="first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="l-name">Last Name</label>
                      <input
                        type="text"
                        name="l-name"
                        placeholder="last name"
                      />
                    </div>
                  </div>
                  <div className="street">
                    <label htmlFor="name">Address</label>
                    <input type="text" name="address" placeholder="address" />
                  </div>
                  <div className="address-info">
                    <div>
                      <label htmlFor="city">City</label>
                      <input type="text" name="city" placeholder="city" />
                    </div>
                    <div>
                      <label htmlFor="state">State</label>
                      <input type="text" name="state" placeholder="state" />
                    </div>
                    <div>
                      <label htmlFor="zip">Zip/Postal</label>
                      <input type="text" name="zip" placeholder="zip-code" />
                    </div>
                  </div>
                  <h2>
                    <i className="far fa-credit-card"></i> Payment Information
                  </h2>
                  <div className="checkbox_container">
                    <div>
                      <label htmlFor="select"> Credit Card</label>
                      <input type="checkbox" name="Credit Card" id="select" />
                    </div>
                    <div>
                      <label htmlFor="select"> Debit Card</label>
                      <input type="checkbox" name="Credit Card" id="select" />
                    </div>
                  </div>
                  <div className="cc-num">
                    <label htmlFor="card-num">Card No.</label>
                    <input
                      type="text"
                      name="card-num"
                      placeholder="card number"
                    />
                  </div>
                  <div className="cc-info">
                    <div>
                      <label htmlFor="card-num">Exp</label>
                      <input type="text" name="expire" placeholder="01/22" />
                    </div>
                    <div>
                      <label htmlFor="card-num">CCV</label>
                      <input type="text" name="security" placeholder="235" />
                    </div>
                  </div>
                  <div className="btns">
                    <button onClick={() => setOrderComplete(true)}>
                      Purchase
                    </button>
                    <button>Back to cart</button>
                  </div>
                </div>
              </div>
            )}

            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Mind;
