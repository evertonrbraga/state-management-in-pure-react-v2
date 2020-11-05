import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return 0;
};

const storeStateInLocalStorage = (count) => {
  localStorage.setItem('counterState', JSON.stringify(count));
  console.log(localStorage);
};

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  });
};

const HooksCounter = ({ max, step }) => {
  const [count, setCount] = useState(getStateFromLocalStorage);

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + step;
    });
  };

  const decrement = () => {
    setCount((count) => {
      if (count === 0) return count;
      return count - 1;
    });
  };

  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  useEffect(() => {
    storeStateInLocalStorage(count);
  }, [count]);

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
