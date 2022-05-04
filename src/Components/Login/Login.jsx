import React, { useState, useEffect } from "react";
import "./Login.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { ImGoogle3 } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/loginDetails/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  // const [loginStatus, setLoginStatus] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const loginRedux = useSelector((store) => store.loginReducer);
  const loginStatus = useSelector((store) => store.loginReducer.loginStatus);
  const dispatch = useDispatch();

  let handleChange = (e) => {
    let { value, name } = e.target;
    setLoginDetails((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  let handleLogin = () => {
    fetch("https://cultfit-backend.herokuapp.com/users/signin", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        token: null,
      },
      method: "POST",
      body: JSON.stringify(loginDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        // setLoginStatus(true)
        dispatch(login(data.userDetail));
        setShowLogin(false);
      });
  };
  let handleSignup = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  let googleAuth = () => {
    window.open("https://cultfit-backend.herokuapp.com/google", "_self");
  };

  let handleSignupApi = async () => {
    fetch("https://cultfit-backend.herokuapp.com/users/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      method: "POST",
      body: JSON.stringify(loginDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(login(data.userDetail));
        setShowLogin(false);
        localStorage.setItem("token", JSON.stringify(data.token));
      });
  };

  return loginStatus === false ? (
    showLogin === true ? (
      <div>
        <div className="login">
          <div className="login__cancel">
            <MdOutlineCancel onClick={() => setShowLogin(false)} />
          </div>
          <div className="login__logo">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQC-VOUCHERSQWIK86179325FFE843/0x1920/70/2.jpg"
              alt="logo"
            />
          </div>

          <div className="login__mobile">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={loginDetails.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={loginDetails.password}
            />
          </div>
          <div className="login__button">
            <button onClick={handleLogin}>CONTINUE</button>
          </div>
          <div className="login__button">
            <button onClick={handleSignup}>SignUp</button>
          </div>
          <div className="login__social" onClick={googleAuth}>
            <div className="login__social-txt">OR CONNECT WITH</div>
            <div className="login__social-img">
              <ImGoogle3 />
              <AiOutlineFacebook />
              <FiMail />
            </div>
          </div>
          <div className="login__tc">
            <p>
              *By Continuing you agree to the <span>Terms of Services</span> ans{" "}
              <span>Privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    ) : showSignup === true ? (
      <div>
        <div className="login">
          <div className="login__cancel">
            <MdOutlineCancel
              onClick={() => {
                setShowLogin(false);
                setShowSignup(false);
              }}
            />
          </div>
          <div className="login__logo">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQC-VOUCHERSQWIK86179325FFE843/0x1920/70/2.jpg"
              alt="logo"
            />
          </div>

          <div className="login__mobile">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={loginDetails.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={loginDetails.password}
            />
          </div>
          <div className="login__button">
            <button onClick={handleSignupApi}>SIGN UP</button>
          </div>
        </div>
      </div>
    ) : null
  ) : null;
};

export default Login;
