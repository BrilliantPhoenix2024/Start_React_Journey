import { createContext } from "react";
import { useCart } from "../hook/useCart";

export const ShopContextCustom = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
});

export const ShopContextCustomProvider = (props) => {
  return (
    <ShopContextCustom value={useCart()}>{props.children}</ShopContextCustom>
  );
};
