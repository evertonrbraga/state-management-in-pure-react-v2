import React from 'react';
import { render } from 'react-dom';

import HooksCounter from './HooksCounter';

import './styles.scss';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <HooksCounter max={15} step={1} />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
