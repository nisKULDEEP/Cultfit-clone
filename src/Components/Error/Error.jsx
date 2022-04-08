import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import { Footer } from "../index";
import "./Error.scss";

const Error = () => {
  const [loading__Status, setLoading__Status] = useState(true);

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
    <div className="error_page">
      <Navbar path="" />
      <div className="error-body">
        <img
          src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
          alt=""
        />
      </div>
      <Footer />
      {/* quick links end */}
    </div>
  );
};

export default Error;
