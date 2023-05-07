import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "../../axios";
import Youtube from "react-youtube";

import "./RowCards.css";
import { POSTER_URL, API_KEY } from "../../Constants/Constants";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
    origin: "http://localhost:3000",
  },
};

function RowCards({ rowTitle, link, small }) {
  const [movieList, setMovieList] = useState([]);
  const [URL, setURL] = useState("");

  useEffect(() => {
    axios.get(link).then((response) => {
      setMovieList(response.data.results);
    });
  }, []);

  const playVideo = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]["key"]);
        setURL(response.data.results[0]["key"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <h4 className="rowTitle">{rowTitle}</h4>
        <div className="cards-row">
          {movieList
            ? movieList.map((item, index) => {
                return (
                  <Card
                    link={POSTER_URL + item.backdrop_path}
                    id={item.id}
                    key={index}
                    small={small}
                    onClickFn={playVideo}
                  />
                );
              })
            : ""}
        </div>
      </div>
      {URL && <Youtube videoId={URL} opts={opts} />}
    </>
  );
}

export default RowCards;
