import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button type="button" onClick={() => setCount(count - 1)}>
        <h2>-</h2>
      </button>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        <h2>+</h2>
      </button>
    </div>
  );
};
export default Counter;
