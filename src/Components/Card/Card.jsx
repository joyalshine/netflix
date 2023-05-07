import React from "react";

import "./Card.css";

function Card({ link }) {
  return (
    <div className="cardDiv">
      <img src={link} alt="Poster" width="150px" />
    </div>
  );
}

export default Card;
