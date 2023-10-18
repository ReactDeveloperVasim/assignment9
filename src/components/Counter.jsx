import React, { useState } from "react";

export const Counter = () => {
  const [btn, setBtn] = useState(0);

  const decrementCounter = () => {
    if (btn > 0) {
      setBtn(btn - 1);
    }
  };

  return (
    <div className="sub">
    <h1>Counter</h1>
      <button onClick={decrementCounter}>-</button>
      <span>{btn}</span>
      <button onClick={() => setBtn(btn + 1)}>+</button>
    </div>
  );
};
