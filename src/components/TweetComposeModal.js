import React, { useState, useContext } from "react";
import { Context } from "../Context";

const TweetComposeModal = () => {
  const [content, setContent] = useState("");
  const [tweet, setTweet] = useContext(Context);
  //const [modalToggle, setModalToggel] = useState(false);

  // const handleChange = e => {
  //   tweet = e.target.value;
  // };

  const handleSubmit = e => {
    e.preventDefault();
    setTweet(prevTweet => [...prevTweet, { content: content }]);
    console.log(tweet);
    //e.data-dismiss="modal"
    setContent("");
  };

  return (
    <div
      className="modal fade"
      id="tweetModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Compose Tweet
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-1">
                <img
                  className="profile-img"
                  src={require("../img/logo.jpg")}
                  alt="logo"
                />
              </div>

              <div className="col-11">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="form-control"
                    id="tweet"
                    rows="4"
                    style={{ borderColor: "#1DA1F2", borderRadius: "10px" }}
                    maxLength="280"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
                  <br />
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    style={{ borderRadius: "20px" }}
                  >
                    Close
                  </button>
                  &nbsp;
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "20px" }}
                    onSubmit={handleSubmit}
                  >
                    <b>Tweet</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ borderRadius: "20px" }}
              onSubmit={handleSubmit}
            >
              <b>Tweet</b>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TweetComposeModal;
