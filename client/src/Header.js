import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="header">
        <h1>GIANT DB</h1>
      </div>
    );
  }
}

export default Header;
