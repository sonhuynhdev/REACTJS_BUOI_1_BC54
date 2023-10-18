import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="  mb-5">
          <div className=" bg-light border-0 h-100">
            <div className="  text-center p-4 p-lg-5 pt-0 pt-lg-0 ">
              <div className=" bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-collection"></i>
              </div>
              <h2 className="fs-4 display-5">Fresh new layout</h2>
              <p className="mb-0">
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
