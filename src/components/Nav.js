import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-light tnav">
        {/* <a class="navbar-brand" href="#" /> */}

        <div class="col-1" />
        <div class="col-3 main-icon-div">
          <i class="fab fa-twitter main-icon" />
          <i class="fas fa-hashtag main-icon" />
          <i class="far fa-bell main-icon" />
          <i class="far fa-envelope main-icon" />
        </div>
        <div class="col-4">
          <input
            class="form-control  search-bar"
            type="search"
            placeholder="&#x1F50D; Search Twitter"
            aria-label="Search"
            style={{ backgroundColor: "#e6ecf0", borderRadius: "20px" }}
          />
        </div>
        <div class="col-2">
          <img
            className="profile-img"
            src={require("../img/logo.jpg")}
            alt="logo"
          />
          <span className="profile-name">Chiranjeeb Jena</span>
        </div>
        <div class="col-1" />
      </nav>
    </div>
  );
};

export default Nav;
