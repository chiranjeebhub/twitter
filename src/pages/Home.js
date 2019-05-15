import React from "react";

const Home = () => {
  return (
    <div>
      <div className="col-1" />
      <div className="col-6">
        <Timeline />
      </div>
      <div className="col-4">
        <TrendSidebar />
      </div>
      <div className="col-1" />
    </div>
  );
};

export default Home;
