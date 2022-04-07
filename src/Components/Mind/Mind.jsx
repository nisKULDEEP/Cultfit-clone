import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Mind.css";
import { Navbarmind } from "./Navbarmind";
import SimpleSlider from "./MindSlider"
import MindFrequntlyAskedQue from "./Mindfaqs";

const Mind = () => {
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
      <Navbar path="mind" />

      <div className="mind-body" style={{ paddingTop: "60px" }}>
        {/* Start coding from here */}
        <Navbarmind/>
        <SimpleSlider/>
        <div className="mind-thearapy">
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_608,ar_1360:100/dpr_2/image/vm/6b3f0355-7178-4898-b4e8-d68b07a43bd6.png" alt="img" />
        </div>
        <h2 className="experts">EXPERTS TO HELP YOU</h2>
        <div className="Mind-main-flex">
          <div className="Mind-child-1">
          <h2>Therapy</h2>
          <br/>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Expert who help solve emotional problems ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>
          <div className="Mind-child-2">
          <h2>Couple Therapy</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Resolve emotional conflicts in relationships and marraiage ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p> 
          </div>

          <div className="Mind-child-3">
          <h2>COVID Stress</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Seek expert help from our therapists for coping with isolation and<br/> Covid related issues ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>

          <div className="Mind-child-4">
          <h2>Better Sleep</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Consult with experts to learn effective stratagies for restfull sleep and good sleep health ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>

          <div className="Mind-child-5">
          <h2>Rise to Confidence</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Grow into a more confident and self assured person ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>

          <div className="Mind-child-6">
          <h2>Thrive at work</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Make work fullfilling and meaningfull  ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>

          <div className="Mind-child-7">
          <h2>Healthy Relationships</h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Understand your relationship patterns and exploring healty relationship ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/>
           <p> <del>₹1300</del> ₹599</p>  
          </div>

          <div className="Mind-child-8">
          <h2>Transform Your Thinking </h2>
          <p>__</p>
          <h5 style={{color: "#3a3b3f"}}>Manage negative or anxious thoughts or overthinking ₹599</h5>
          <p>⏰ 50 Mins Session</p>
          <br/>
          <br/>
          <br/>
          <br/> 
           <p> <del>₹1300</del> ₹599</p>  
          </div>
        </div>
         
        <div className="online-psy">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_590,ar_1360:200/dpr_2/image/vm/4cb47d66-ed1a-4d40-b42b-db27b77d2258.png" alt="img" />
        </div>

        <div className="join-med">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_700,ar_1360:150/dpr_2/image/vm/23f48c0c-8cca-46f7-bc49-5848459eb1df.png" alt="img" />
        </div>

        <div className="what-you-assure">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_759,ar_800:150/dpr_2/image/vm/8d058e84-f098-4129-b107-dc81c19af2f1.png" alt="img" />
        </div>

        <div className="what-we-help">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_759,ar_600:120/dpr_2/image/vm/7f7af73c-3ee3-46c1-9129-0df18dbb02ac.png" alt="img" />
        </div>
        <div className="mindfaqs">
        <MindFrequntlyAskedQue/>
        </div>
      </div>
    </div>
  );
};

export default Mind;
