import React from "react";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import { NavbarRight } from "../NavbarRight/NavbarRight";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
}

export default Navbar;
