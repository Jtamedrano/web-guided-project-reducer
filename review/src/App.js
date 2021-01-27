import React, { useReducer, useState } from 'react';
import reducer from './reducers/calcReducer';
import './styles.css';

const initialState = {
  inputValue: 0,
  currentValue: 0,
  memory: 0,
  lastAction: '',
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleBtnClick(e, btn) {
    e.preventDefault();
    switch (btn) {
      case 'ADD':
        dispatch({ type: 'ADD', payload: state.inputValue });
        dispatch({ type: 'EQUALS' });
        break;
      case 'SUBTRACT':
        dispatch({ type: 'SUBTRACT', payload: state.inputValue });
        dispatch({ type: 'EQUALS' });
        break;
      case 'EQUALS':
        dispatch({ type: state.lastAction, payload: state.inputValue });
        dispatch({ type: 'EQUALS' });
        break;
    }
  }
  console.log(state);
  return (
    <div className="App">
      <textarea
        rows="1"
        value={state.inputValue} // sets the value to the inputValue from reducer
        onFocus={(e) => {
          e.preventDefault();
          dispatch({ type: 'TYPE_INPUT', payload: '' });
        }} // clears input so user can type freely
        onChange={(e) =>
          dispatch({ type: 'TYPE_INPUT', payload: e.target.value })
        } // acts as setValue
        id="total"
        type="text"
        name="ans"
      ></textarea>
      <br />
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          handleBtnClick(e, 'ADD');
        }}
      >
        +
      </button>
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          handleBtnClick(e, 'SUBTRACT');
        }}
      >
        -
      </button>
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          handleBtnClick(e, 'EQUALS');
        }}
      >
        =
      </button>
    </div>
  );
}
