import React from "react";

import "./NavbarLeft.css";

function NavbarLeft() {
  return (
    <div
      className="navbarLeft"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
          width="70px"
        />
      </div>
      <div className="navlinksDiv">
        <a className="navlink" href="#">
          Home
        </a>
        <a className="navlink">TV Shows</a>
        <a className="navlink">Movies</a>
        <a className="navlink">Recently Added</a>
        <a className="navlink">My List</a>
      </div>
    </div>
  );
}

export default NavbarLeft;
