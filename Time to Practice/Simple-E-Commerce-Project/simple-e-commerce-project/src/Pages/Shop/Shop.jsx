import React from "react";
import { all_products } from "../../Data/all_products";
import Product from "../../Components/Product/Product";
const Shop = () => {
  return (
    <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
        {all_products.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
