import React from "react";
import { PRODUCTS } from "../../Data/PRODUCTS";
import Product from "../../Components/Product/Product";
const Shop = () => {
  return (
    <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
