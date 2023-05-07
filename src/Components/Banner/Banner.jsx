import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <Navbar />
      <div className="titleDiv">
        <h1 className="title">
          MONEY <br /> HEIST
        </h1>
        <button type="button" className="title-btn">
          <i class="bx bx-play"></i> Play
        </button>
        <button type="button" className="title-btn">
          <i class="bx bx-plus"></i>My List
        </button>
      </div>
      <div className="title-description">
        <p>
          <b> Watch Part 3 Now</b> <br />
          With millions of euros and their lives on the line, nine robbers
          attemp to pull off the greatest heist of all time
        </p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
