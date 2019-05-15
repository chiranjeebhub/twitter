import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
  const [tweet, setTweet] = useState([
    {
      content: ""
    }
  ]);
  const [show, setShow] = useState(false);
  return (
    <Context.Provider value={[tweet, setTweet, show, setShow]}>
      {props.children}
    </Context.Provider>
  );
};
