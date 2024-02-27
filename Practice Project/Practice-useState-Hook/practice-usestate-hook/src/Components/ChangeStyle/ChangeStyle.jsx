import React, { useState } from "react";

const ChangeStyle = () => {
  const [textColor, setTextColor] = useState("purple");
  return (
    <div>
      <button
        onClick={() =>
          setTextColor(textColor === "purple" ? "green" : "purple")
        }
      >
        Change Style
      </button>
      <h1 style={{ color: textColor }}>Atefeh @ 2025</h1>
    </div>
  );
};

export default ChangeStyle;
