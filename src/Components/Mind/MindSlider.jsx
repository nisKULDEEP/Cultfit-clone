import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MindSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="mainslide">
        <Slider {...settings} style={{ overflow: "hidden" }}>
          <div>
            <img
              className="mindslider"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/3868eccb-9a5f-4e22-bdb3-70b403751a7f.png"
              alt="img"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <img
              className="mindslider"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/a263671d-7358-4036-9998-6b4090af4adc.png"
              alt="img"
              style={{ width: "100%" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
