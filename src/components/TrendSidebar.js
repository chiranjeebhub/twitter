import React from "react";

const TrendSidebar = () => {
  return (
    <div>
      <div className="card">
        <div
          className="card-body"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <p className="home-title">
            <b>Trends for you</b>
            <span style={{ float: "right" }}>
              <i className="fas fa-cog" />
            </span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TrendSidebar;
