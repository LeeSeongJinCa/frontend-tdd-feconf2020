import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    setCount((prev) => prev - 1);
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
