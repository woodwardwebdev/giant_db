import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="sidebar">
        <h5>This is in the sidebar</h5>
        <ul>
          <li>List of Stuff</li>
          <li>More Stuff</li>
          <li>Probs some dragons and other shit</li>
          <li>Put stuff here to click on.</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
