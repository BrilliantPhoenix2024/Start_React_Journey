import React, { useContext } from "react";
import { ShopContextCustom } from "../../context/shopContextCustom";

const Product = (props) => {
  const { id, image, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShopContextCustom);

  const isInCart = cartItems?.some((item) => item.id === id);

  return (
    <div className="col-3">
      <img src={image} />
      <h5> {name}</h5>
      <p>price : ${price}</p>
      <button
        className="btn btn-info btn-sm my-5"
        onClick={() => addToCart(id)}
      >
        Add
      </button>
      <span className="mx-3">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm my-5"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Product;
