import React from "react";
import "./Navbar.scss";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  let parameter = useParams();
  console.log(parameter);

  return (
    <div className="navbar">
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
          <li>
            <Link to="/fitness" className="navbar__links-link">
              fitness
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/care" className="navbar__links-link">
              care
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/mind" className="navbar__links-link">
              mind
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/store" className="navbar__links-link">
              store
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="navbar__cart">
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
        <div className="navbar__cart-button">
          <button>GET APP</button>
        </div>
        <div className="navbar__cart-profile">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
            alt="profile"
          />
        </div>

        <div className="navbar__cart-cart">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
