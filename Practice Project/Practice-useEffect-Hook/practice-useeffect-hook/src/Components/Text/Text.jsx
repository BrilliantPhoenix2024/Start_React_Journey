import React, { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");

  // Mounting stage
  // Unmounting stage
  useEffect(() => {
    console.log("Component did mount.");

    return () => {
      console.log("Component unmount.");
    };
  }, []);

  // Updating stage
  useEffect(() => {
    console.log("Component updated.");
  }, [text]);

  return (
    <div>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
