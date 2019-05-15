import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import "./css/index.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Notification from "./pages/Notification";
import Message from "./pages/Message";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trends" component={Trends} />
          <Route path="/notification" component={Notification} />
          <Route path="/message" component={Message} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
