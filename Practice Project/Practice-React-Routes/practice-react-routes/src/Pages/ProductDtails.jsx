import React from "react";
import { useParams } from "react-router-dom";

const ProductDtails = () => {
  let { productId } = useParams();
  return (
    <div>
      <h1>ProductDtails</h1>
      <h2>This is Details of Product {productId}</h2>
    </div>
  );
};

export default ProductDtails;
