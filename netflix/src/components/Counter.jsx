import React, { useState, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div className="counter">
      <button type="button" onClick={decrement}>
        <h2>-</h2>
      </button>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        <h2>+</h2>
      </button>
    </div>
  );
};
export default Counter;
