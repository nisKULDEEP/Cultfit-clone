import React from 'react'
import "./Care.scss";

const SuperSpecialists = () => {
  return (
    <div className='superspecialists'>
      <div className='superspecialists__heading'>
        <h1 className='superspecialists__head'>Tests for Senior Citizen</h1>
        {/* <p className='superspecialists__para'>Video/Audio call super-specialists for your family</p> */}
      </div>
      <div className="superspecialists__images">
            <div className="superspecialists__IndDiv">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png"
                alt=""
                className="superspecialists__IndImage"
              />
              <div>
                <p>Price</p>
                <h4>Rs. 1990</h4>
              </div>
              <div>
                <p>Offer Price</p>
                <h4>Rs. 990</h4>
              </div>
            </div>
            <div className="superspecialists__IndDiv">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Vitamin_Profile_clp.jpg"
                alt=""
                className="superspecialists__IndImage"
              />
              <div>
                <p>Price</p>
                <h4>Rs. 1990</h4>
              </div>
              <div>
                <p>Offer Price</p>
                <h4>Rs. 990</h4>
              </div>
            </div>
      </div>
    </div>
  )
}

export default SuperSpecialists