import React, { Component } from "react";

export default class PageOne extends Component {
  render() {
    return (
      <div style={{ position: "absolute", width: "100%" }}>
        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col s3"></div>
          <div class="col s6">
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <p>Page Two</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
