import React from "react";

import "./NavbarRight.css";
export const NavbarRight = () => {
  return (
    <div className="navbarRight">
      <i className="bx bx-search-alt-2" style={{ color: "white" }}></i>
      <a href="" className="navlink">
        KIDS
      </a>
      <a href="" className="navlink">
        DVD
      </a>
      <i
        className="bx bxs-bell"
        style={{ color: "white", marginInline: "15px" }}
      ></i>
      <div>
        <img
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
          width="25px"
        />
      </div>
    </div>
  );
};
