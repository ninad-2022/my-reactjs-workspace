import React, { Component } from "react";

class Product extends Component {
  render() {
    const { title, price, desc } = this.props;
    return (
      <div
        style={{
          width: 200,
          height: 300,
          border: "2px solid #000",
          padding: 10,
          margin: 10,
        }}
      >
        {/* <h2>{this.props.title}</h2>
        <h4>Price:- {this.props.price}</h4>
        <p>{this.props.desc}</p> */}
        {/* here we are using that inputs from props (PropsDemo.js ). see this.props.title/price/desc   */}

        {/* after destrcuting the object this.props  */}
        <h2>{title}</h2>
        <h4>Price:- {price}</h4>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Product;
