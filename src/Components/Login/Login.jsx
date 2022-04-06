import React, { useState } from "react";
import "./Login.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { ImGoogle3 } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/loginDetails/action";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [mobile, setMobile] = useState(+91);
  const loginDetails = useSelector((store) => store.loginReducer.loginDetails);
  const loginStatus = useSelector((store) => store.loginReducer.loginStatus);
  const dispatch = useDispatch();

  let handleChange = (e) => {
    setMobile(e.target.value);
  };

  let handleLogin = () => {
    dispatch(login(mobile));
  };

  return (
    showLogin && (
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
          {loginStatus ? (
            <div style={{ paddingBottom: "100px", textAlign: "center" }}>
              Login Sucessfull. Your Account id {loginDetails}
            </div>
          ) : (
            <>
              {" "}
              <div className="login__mobile">
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  value={mobile}
                />
              </div>
              <div className="login__button">
                <button onClick={handleLogin}>CONTINUE</button>
              </div>
              <div className="login__social">
                <div className="login__social-txt">OR CONNECT WITH</div>
                <div className="login__social-img">
                  <ImGoogle3 />
                  <AiOutlineFacebook />
                  <FiMail />
                </div>
              </div>
              <div className="login__tc">
                <p>
                  *By Continuing you agree to the <span>Terms of Services</span>{" "}
                  ans <span>Privacy policy</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default Login;
