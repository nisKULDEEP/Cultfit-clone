import React from "react";
import { useState } from "react";
import "./Slide.scss";

const Slide = () => {
  const [image, setImage] = useState("");
  return (
    <div id="main">
      <div className="div-img">
        <img id="imgtag" alt="" src={image} />
      </div>
      <div id="secondmain">
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span>
            <div className="shadow">
              <h2>WORKOUT GEAR</h2>
            </div>
          </span>
        </a>
        <a
          href="/en/"
          onMouseEnter={() =>
            setImage(
              `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>CONSULT ONLINE</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>LABS</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy3.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>THERAPY</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy4.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        ></a>
      </div>
    </div>
  );
};

export default Slide;
