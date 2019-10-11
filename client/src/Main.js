import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Main;
