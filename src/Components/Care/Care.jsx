import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Specialities from "./Specialities";

import "./Care.scss";

const Care = () => {
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
      <Navbar path="care" />

      <div className="care-body" style={{ paddingTop: "60px" }}>
        <div className="storeNav">
          {" "}
          <n>Online Consult</n>
          <div>Lab Tests</div>
        </div>
        <ImageSlider slides={SliderData} />
        <Specialities />
      </div>
    </div>
  );
};

export default Care;
