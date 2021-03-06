import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Specialities from "./Specialities";
import "./Care.scss";
import SuperSpecialists from "./SuperSpecialists";
import Experts from "./Experts";
import FrequntlyAskedQue from "./FrequntlyAskedQue";
import DoctorsInfo from "./DoctorsInfo";
import { Footer } from "../index";
import Timer from "./Timer";

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
    <div className="care_page">
      <Navbar path="care" />
      <div className="care-body" style={{}}>
        <div className="storeNav">
          {" "}
          <n>Online Consult</n>
          <div>Lab Tests</div>
        </div>

        {/* Start coding from here */}
        <ImageSlider slides={SliderData} />
        <Timer />
        <div className="careBody">
          <Specialities />
          <SuperSpecialists />
          {/* <Experts /> */}

          {/* quick links start */}

          <div className="quicklinks">
            <div className="quicklinks__heading">
              <h1>Quick Links</h1>
            </div>
            <div className="quicklinks__link">
              <a href="#">Help & Support</a>
              <hr className="quicklinks__hori" />
              <a href="#">Terms & Conditions</a>
              <hr className="quicklinks__hori" />
            </div>
          </div>

          <FrequntlyAskedQue />
          <DoctorsInfo />
        </div>
      </div>
      <Footer />
      {/* quick links end */}
    </div>
  );
};

export default Care;
