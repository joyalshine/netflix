import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "../../axios";

import "./Banner.css";
import { API_KEY, BANNER_IMG_URL } from "../../Constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie
          ? `url(${BANNER_IMG_URL + movie.backdrop_path})`
          : "",
      }}
    >
      <Navbar />
      <div className="titleDiv">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <button type="button" className="title-btn">
          <i className="bx bx-play"></i> Play
        </button>
        <button type="button" className="title-btn">
          <i className="bx bx-plus"></i>My List
        </button>
      </div>
      <div className="title-description">
        <p>
          <b> Watch Part 3 Now</b> <br />
          {movie ? movie.overview : ""}
        </p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
