import React, { useState, useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

const reducer = (state, action) => {
  switch (action.type) {
    case GRUDGE_ADD:
      return [action.payload, ...state];

    case GRUDGE_FORGIVE: {
      return state.map((grudge) => {
        if (grudge.id !== action.payload) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      });
    }

    default:
      return state;
  }
};

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = ({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id(),
      },
    });
    console.log(grudges);
  };

  const toggleForgiveness = (id) => {
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: id,
    });
  };

  return (
    <div className='Application'>
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
