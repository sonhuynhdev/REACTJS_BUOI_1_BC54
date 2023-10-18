import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

export default class Ex_layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="row">
          <div className="col-4">
            <Item />
            <Item />
          </div>
          <div className="col-4">
            <Item />
            <Item />
          </div>
          <div className="col-4">
            <Item />
            <Item />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
