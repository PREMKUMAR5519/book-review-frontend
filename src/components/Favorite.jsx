import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function Favorite() {
  const [isClick, setClick] = useState(false);
  return (
    <div style={{position:"static"}} className="App">
      <Heart  isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}