import React, { useContext } from "react";
import Tweet from "./Tweet";
import TweetComposeModal from "./TweetComposeModal";
import { Context } from "../Context";

const Timeline = () => {
  const [tweet, setTweet] = useContext(Context);
  return (
    <div>
      <div className="card">
        <div
          className="card-body"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <p className="home-title">
            <b>Home</b>
            <span style={{ float: "right" }}>
              <i className="far fa-star" />
            </span>
          </p>
          <hr />
          <div
            className="container row"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <div className="col-1">
              <img
                className="profile-img"
                src={require("../img/logo.jpg")}
                alt="logo"
              />
            </div>
            <div className="col-11" style={{ textAlign: "center" }}>
              <img
                className="tweet-fake-input"
                src={require("../img/tweet.jpg")}
                alt="logo"
                data-toggle="modal"
                data-target="#tweetModal"
              />
            </div>
            <TweetComposeModal />
          </div>
          <hr />
          {tweet.map((t, i) => {
            return (
              <div key={i}>
                <Tweet content={t.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
