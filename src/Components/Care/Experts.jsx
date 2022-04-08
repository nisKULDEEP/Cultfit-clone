import React from "react";
import "./Care.scss";

const Experts = () => {
  return (
    <div className="expert">
      <div className="expert__heading">
        <h1 className="expert__head">EXPERTS TO HELP YOU</h1>
        <p className="expert__para">Consult our Experts Online</p>
      </div>
      <div className="expert__images">
        <div className="expert__image1">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/carefit/consultation/Ayurveda_small.png"
            alt=""
            className="expert__IndImage"
          />
          <div className="expert__text1">
            <h1 className="expert__head1">Ayurveda Consultation</h1>
            <hr className="expert__hori" />
            <p className="expert__para1">
              Natural and holistic healing with Ayurvedic experts Rs.450
            </p>
            <p className="expert__para2">
              <i></i>20 Mins Session
            </p>
            <h1 className="expert__head2">Rs.450</h1>
          </div>
        </div>

        <div className="expert__image2">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/carefit/consultation/Therapy-web3.png"
            alt=""
            className="expert__IndImage expert__img2"
          />
          <div className="expert__text2">
            <h1 className="expert__head1">Therapy Consultation</h1>
            <hr className="expert__hori" />
            <p className="expert__para1">
              Experts who help solve emotionals problems Rs.599
            </p>
            <p className="expert__para2">
              <i></i>50 Mins Session
            </p>
            <h1 className="expert__head2">Rs.599</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
