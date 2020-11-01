import React, { useState } from 'react';

const increments = (state, max, step) => {
  if (state.count >= max) return;
  return { count: state.count + step };
};

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
};

const HooksCounter = ({ max, step }) => {
  const [state, setState] = useState(getStateFromLocalStorage());

  const updateDocumentTitle = () => {
    document.title = `HooksCounter: ${state.count}`;
  };

  const increment = () => {
    setState(() => {
      increments(state, max, step);
      storeStateInLocalStorage(state);
    });
    console.log('Before:', state);
  };

  const decrement = () => {
    setState(state.count - 1);
  };

  const reset = () => {
    setState((state.count = 0));
  };

  const { count } = state;
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
