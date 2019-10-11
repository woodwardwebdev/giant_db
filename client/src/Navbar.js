import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="navbar">
        <nav>
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
