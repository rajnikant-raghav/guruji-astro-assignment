import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_container" id="navbar_container">
      <a style={{ all: "unset" }} href="#home_container">
        <div className="nav_item">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
      </a>
      <Link style={{ all: "unset" }} to={"/"}>
        <div className="nav_item">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
      </Link>
      <Link style={{ all: "unset" }} to={"/favorite"}>
        <div className="nav_item">
          <i class="fa-regular fa-bookmark"></i>
          <span>Favorite</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
