import React from "react";
import Timeline from "../components/Timeline";
import TrendSidebar from "../components/TrendSidebar";

const Home = () => {
  return (
    <div className="home-layout">
      <div className="row">
        <div className="col-1" />
        <div className="col-6 timeline">
          <Timeline />
        </div>
        <div className="col-4 timeline">
          <TrendSidebar />
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
};

export default Home;
