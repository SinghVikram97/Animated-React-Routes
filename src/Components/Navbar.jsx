import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={{ backgroundColor: "#21567b" }}>
          <div class="nav-wrapper left-align">
            <a href="#" class="brand-logo" style={{ paddingLeft: "2%" }}>
              React Animating
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/one">Page One</Link>
              </li>
              <li>
                <Link to="/two">Page Two</Link>
              </li>
              <li>
                <Link to="/three">Page Three</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
