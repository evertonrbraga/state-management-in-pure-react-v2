import React, { useState, useEffect, useRef } from 'react';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage) return JSON.parse(storage);
//   return 0;
// };

// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem('counterState', JSON.stringify(count));
//   console.log(localStorage);
// };

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const HooksCounter = ({ max, step }) => {
  // const [count, setCount] = useState(getStateFromLocalStorage()); //default state way
  // const [count, setCount] = useLocalStorage(0, 'count'); // custom hook way
  const [count, setCount] = useState(0);

  const countRef = useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const increment = () => {
  //   setCount((count) => {
  //     if (count >= max) return count;
  //     return count + step;
  //   });
  // };

  const decrement = () => {
    setCount((count) => {
      if (count === 0) return count;
      return count - 1;
    });
  };

  const reset = () => setCount(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Counter: ${count}`);
    }, 3000);

    return () => clearInterval(id);
  });

  // useEffect(() => {
  //   document.title = `Counter: ${count}`;
  // });

  // useEffect(() => {
  //   storeStateInLocalStorage(count);
  // }, [count]);

  return (
    <div className="ClassCounter">
      <p>{message}</p>
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
