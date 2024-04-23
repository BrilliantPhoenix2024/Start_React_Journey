import React, { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((initialValue) => initialValue + 1);
  };

  const decrease = () => {
    setCount((initialValue) => initialValue - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };
  return { count, increase, decrease, reset };
};
