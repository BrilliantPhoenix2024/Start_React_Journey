// Custom Hook
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const data = localStorage.getItem("1");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem("1", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId)) {
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
          } else return item;
        })
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        } else return item;
      })
    );
  };

  const resetCart = () => {
    setCartItems();
    localStorage.removeItem("1");
    localStorage.clear();
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};
