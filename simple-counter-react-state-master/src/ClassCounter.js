import React, { Component } from 'react';

const increment = (state, props) => {
  const { max, step } = props;
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

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateDocumentTitle = () => {
    document.title = `ClassCounter: ${this.state.count}`;
  };

  increment() {
    this.setState(increment, () => {
      storeStateInLocalStorage(this.state);
      this.updateDocumentTitle();
    });
    console.log('Before:', this.state);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 }, () =>
      this.updateDocumentTitle(),
    );
  }

  reset() {
    this.setState({ count: 0 }, () => this.updateDocumentTitle());
  }

  render() {
    const { count } = this.state;
    return (
      <div className="ClassCounter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default ClassCounter;
