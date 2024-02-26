import React, { useState } from "react";

const ToggleText = () => {
  const [showText, setshowText] = useState(true);
  return (
    <div>
      <button onClick={() => setshowText(!showText)}> Toggle Text</button>
      {showText && <h1>Atefeh @ 2025</h1>}
    </div>
  );
};

export default ToggleText;
