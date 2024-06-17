import React from "react";

const Product = (props) => {
  const { id, image, name, price } = props.data;
  return (
    <div className="col-3">
      <img src={image} />
      <h5> {name}</h5>
      <p>price : ${price}</p>
      <button className="btn btn-info btn-sm my-5">Add</button>
      <span className="mx-3">0</span>
      <button className="btn btn-info btn-sm my-5">Remove</button>
    </div>
  );
};

export default Product;
