import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
// import "./Fitness.scss";

const Fitness = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

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
      <Navbar path="fitness" />
      {/* Start coding from here */}
      <div className="fitness-body" style={{ paddingTop: "60px" }}>
        {/* Start coding from here */}
        Fitness Page
      </div>
    </div>
  );
};

export default Fitness;
