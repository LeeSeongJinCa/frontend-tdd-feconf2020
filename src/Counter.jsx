import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(prev => prev + 1);
  };

  const onDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
