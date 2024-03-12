import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link>Product 2</Link>
        </li>
        <li>
          <Link>Product 3</Link>
        </li>
        <li>
          <Link>Product 4</Link>
        </li>
        <li>
          <Link>Product 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
