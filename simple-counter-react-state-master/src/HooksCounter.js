import React, { useState } from 'react';

const HooksCounter = ({ max, step }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + step;
    });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="ClassCounter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default HooksCounter;
