import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="content">
        <h5>Main Content Goes here</h5>
        <p>This is a paragraph</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque purus semper eget duis. Velit laoreet id donec ultrices
          tincidunt arcu non sodales neque. Orci ac auctor augue mauris augue.
          In arcu cursus euismod quis. Nam at lectus urna duis convallis
          convallis tellus. Duis ut diam quam nulla porttitor massa id. Lorem
          dolor sed viverra ipsum. Fermentum posuere urna nec tincidunt praesent
          semper feugiat. Ac tortor dignissim convallis aenean et tortor. Dui id
          ornare arcu odio ut sem nulla pharetra diam. Vitae congue mauris
          rhoncus aenean vel elit scelerisque. In est ante in nibh mauris. Odio
          ut sem nulla pharetra diam sit amet nisl. Cursus vitae congue mauris
          rhoncus aenean vel elit. Sit amet mattis vulputate enim nulla aliquet
          porttitor lacus luctus. Mauris pellentesque pulvinar pellentesque
        </p>
      </div>
    );
  }
}

export default Content;
