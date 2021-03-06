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
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/podcasters.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Podcasters</h2>
            </div>
          </span>
        </a>
        <a
          href="/en/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/videocreators.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Video Creators</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musicians.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Musicians</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/visualartists.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Visual Artists</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/communities.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Communities</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/writers.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Writers & Journalists</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/gamingcreators.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Gaming Creators</h2>
            </div>
          </span>
        </a>
        <a
          href="/fr/"
          onMouseEnter={() =>
            setImage(
              `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/nonprofit.png`
            )
          }
          // onMouseLeave={() => setImage("")}
        >
          <span className="shadow">
            <div>
              <h2>Nonprofits</h2>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Slide;
