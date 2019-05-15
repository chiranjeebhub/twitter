import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const handleChange = e => {};
  return (
    <div>
      <nav className="navbar navbar-light tnav">
        {/* <a className="navbar-brand" href="#" /> */}

        <div className="col-1" />
        <div className="col-3 main-icon-div">
          <NavLink
            to="/"
            exact
            className="fab fa-twitter main-icon"
            activeStyle={{ color: "#1da1f2" }}
            style={{ textDecoration: "none" }}
          />
          <NavLink
            to="/trends"
            className="fas fa-hashtag main-icon"
            activeStyle={{ color: "#1da1f2" }}
            style={{ textDecoration: "none" }}
          />
          <NavLink
            to="/notification"
            className="far fa-bell main-icon"
            activeStyle={{ color: "#1da1f2" }}
            style={{ textDecoration: "none" }}
          />
          <NavLink
            to="/message"
            className="far fa-envelope main-icon"
            activeStyle={{ color: "#1da1f2" }}
            style={{ textDecoration: "none" }}
          />
        </div>
        <div className="col-4">
          <input
            className="form-control  search-bar"
            type="search"
            placeholder="&#x1F50D; Search Twitter"
            aria-label="Search"
            style={{ backgroundColor: "#e6ecf0", borderRadius: "20px" }}
          />
        </div>
        <div className="col-2">
          <img
            className="profile-img"
            src={require("../img/logo.jpg")}
            alt="logo"
          />
          <span className="profile-name">Chiranjeeb Jena</span>
        </div>
        <div className="col-1" />
      </nav>
    </div>
  );
};

export default Nav;
