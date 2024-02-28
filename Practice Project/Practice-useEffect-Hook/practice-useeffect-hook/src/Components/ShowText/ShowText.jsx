import React, { useState } from "react";
import Text from "../Text/Text";

const ShowText = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
};

export default ShowText;
