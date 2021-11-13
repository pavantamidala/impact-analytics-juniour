import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="heading">
        <h4>Impact Analytics Job Portal</h4>
      </div>
      <div className="home">
        <NavLink
          to="/"

        >
          Home
        </NavLink>
      </div>
      <div className="shortlisted">
        <NavLink
          to="/shortlisted"
        >
          ShortListed
        </NavLink>
      </div>
      <div className="rejected">
        <NavLink
          to="/rejected"
        >
          Rejected
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
