import React from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = React.useState(0);

//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   //   const currentDiv = (n) => {
//   //     setCurrent(current = n);
//   //   }

//   console.log(current);

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className="slider">
//       <FaArrowAltCircleLeft
//         className="slider__left-arrow"
//         onClick={prevSlide}
//       />
//       <FaArrowAltCircleRight
//         className="slider__right-arrow"
//         onClick={nextSlide}
//       />
//       <FontAwesomeIcon
//         icon={faCircle}
//         onClick={() => setCurrent(0)}
//         className="slider__circle1"
//       />
//       <FontAwesomeIcon
//         icon={faCircle}
//         onClick={() => setCurrent(1)}
//         className="slider__circle2"
//       />
//       <FontAwesomeIcon
//         icon={faCircle}
//         onClick={() => setCurrent(2)}
//         className="slider__circle3"
//       />

//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img
//                 src={slide.image}
//                 alt=" slider image "
//                 className="slider__image"
//               />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

const ImageSlider = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 500,
  };

  return (
    <div className="store__sliderContainer">
      <Slider {...settings} style={{ overflow: "hidden" }}>
        <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:150/dpr_2/image/vm/e90cacd5-32e0-403b-881b-be56cd0d91e8.png" alt="" className="up-header-img" />
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/5d19f72d-f1d8-478f-ae31-9b25883b1782.png" alt="" className="header-img" />
       </div>
       {/* <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/452c3cdf-2932-4a66-b579-4c31dda35839.png" alt="" className="up-header-img" />
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/5d19f72d-f1d8-478f-ae31-9b25883b1782.png" alt="" className="header-img" />
       </div> */}
        {/*
        <div>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/e71d8ad0-e0e2-4b2b-ba16-ca2b91b66561.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/d1922c97-96e3-4022-90ea-3a200ba229cc.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      
      <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/5d19f72d-f1d8-478f-ae31-9b25883b1782.png" alt="" className="header-img" />
      </div> */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
