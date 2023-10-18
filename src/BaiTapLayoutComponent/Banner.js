import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="py-5 container">
        <div className="px-lg-5">
          <div className="p-4 p-lg-5 bg-light ">
            <div className="m-4 m-lg-5">
              <div className="display-3 text-lg-left">A warm welcome</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                optio blanditiis animi reprehenderit quaerat ducimus possimus
                porro quae voluptate aliquid?
              </p>
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
