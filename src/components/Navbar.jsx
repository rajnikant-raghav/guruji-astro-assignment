import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { incrementCount } from "../slices/detailsSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.details.count);

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) dispatch(incrementCount(JSON.parse(storedData).length));
  }, [count]);

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
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
      </Link>
      <Link style={{ all: "unset" }} to={"/favorite"}>
        <div className="nav_item">
          <span className="notification">{count > 0 ? count : ""}</span>
          <i className="fa-regular fa-bookmark"></i>
          <span>Favorite</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
