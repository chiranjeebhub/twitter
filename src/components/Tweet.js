import React from "react";

const Tweet = ({ content }) => {
  return (
    <div>
      <div
        className="container row"
        style={{ marginLeft: "0px", marginRight: "0px" }}
      >
        <div className="col-1" style={{ paddingRight: "5px" }}>
          <img
            className="profile-img"
            src={require("../img/logo.jpg")}
            alt="logo"
          />
        </div>
        <div className="col-11" style={{ textAlign: "center" }}>
          <p style={{ textAlign: "left" }}>
            <b>Chiranjeeb Jena</b>
            <span style={{ color: "gray" }}> @ichiranjeeb . 10h</span>
          </p>
          <p style={{ textAlign: "left", marginTop: "-10px" }}>
            {/* Microsoft is warning of another WannaCry situation. The software
            maker has released fixes for a critical security exploit in Windows
            7, Windows XP, and old server variants. Microsoft is calling this
            exploit ‘wormable’ which is pretty major. */}
            {content}
          </p>
          <p style={{ color: "gray", textAlign: "left" }}>
            <span style={{ marginRight: "30px" }} className="count">
              <i className="far fa-comment tweet-icon" /> 20
            </span>
            <span style={{ marginRight: "30px" }} className="count">
              <i className="fas fa-retweet tweet-icon" /> 10
            </span>
            <span style={{ marginRight: "30px" }} className="count">
              <i className="far fa-heart tweet-icon" /> 50
            </span>
            <span>
              <i className="fas fa-external-link-alt tweet-icon" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
