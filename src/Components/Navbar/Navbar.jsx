import React, { useRef, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";

const Navbar = (path) => {
  path = path.path;

  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div
        className="navbar"
        style={
          path === "home"
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "#15171C" }
        }
      >
        <div className="navbar__logo">
          <Link to="/" className="navbar__links-link">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li
              style={
                path === "fitness"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              <Link
                to="/fitness"
                className="navbar__links-link"
                style={
                  path === "fitness"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                fitness
              </Link>{" "}
            </li>
            <li
              style={
                path === "care"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/care"
                className="navbar__links-link"
                style={
                  path === "care"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                care
              </Link>{" "}
            </li>
            <li
              style={
                path === "mind"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/mind"
                className="navbar__links-link"
                style={
                  path === "mind"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                mind
              </Link>{" "}
            </li>
            <li
              style={
                path === "store"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/store"
                className="navbar__links-link"
                style={
                  path === "store"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                store
              </Link>{" "}
            </li>
            <li
              style={
                path === "store"
                  ? {
                      borderBottomColor: "white",
                      borderBottomWidth: "2px",
                      borderBottomStyle: "solid",
                    }
                  : { borderWidth: "none" }
              }
            >
              {" "}
              <Link
                to="/store"
                className="navbar__links-link"
                style={
                  path === "store"
                    ? {
                        color: "white",
                      }
                    : { color: "rgb(240, 240, 240, 0.6)" }
                }
              >
                store
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar__cart">
          <div className="navbar__cart-location">
            <div className="navbar__cart-location-name">
              <select name="location" id="navbar__cart-location-name-select">
                <option value="bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ranchi">Ranchi</option>
              </select>
            </div>
            <div className="navbar__cart-location-img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt="location"
              />
            </div>
          </div>
          <div className="navbar__cart-button">
            <button>GET APP</button>
          </div>
          <div
            className="navbar__cart-profile"
            onClick={() => setShowLogin(!showLogin)}
          >
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
              alt="profile"
            />
          </div>

          <div
            className="navbar__cart-cart"
            onClick={() => setShowCart(!showCart)}
          >
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
              alt="cart"
            />
          </div>
        </div>
        <div className="login__popup">{showLogin && <Login />}</div>
        <div className="cart__popup">{showCart && <Cart />}</div>
        <div className="disclaimer__popup">
          It’s a project for educational purpose only and not commercial purpose
        </div>
      </div>
      <div className="m-nav">
        <div className="m-nav__hamburgar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="m-nav__logo">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
            alt="m-logo"
          />
        </div>

        <div className="m-nav__location">
          <div className="navbar__cart-location">
            <div className="navbar__cart-location-name">
              <select name="location" id="navbar__cart-location-name-select">
                <option value="banglore">Banglore</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ranchi">Ranchi</option>
              </select>
            </div>
            <div className="navbar__cart-location-img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt="location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
