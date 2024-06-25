import React, { useContext } from "react";
import { PRODUCTS } from "../../Data/PRODUCTS";
import { ShopContext } from "../../context/shopContext";
import Product from "../../Components/Product/Product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <React.Fragment>
      <h1>Your Cart Items</h1>
      <div className="row">
        {PRODUCTS.map((product) => {
          if (cartItems.some((i) => i.id === product.id && i.count > 0)) {
            return <Product data={product}></Product>;
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
