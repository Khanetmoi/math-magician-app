import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [currentState, setState] = useState(0);

  const event = (e) => {
    const value = e.target.textContent;
    setState((currentState) => calculate(currentState, value));
  };

  const { next, total, operation } = currentState;
  const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
  return (
    <div className="wrapper">
      <h2>Let s do some math</h2>
      <div className="container">
        <div className="output">
          <span>{result}</span>
        </div>
        <button type="submit" onClick={event}>AC</button>
        <button type="submit" onClick={event}>+/-</button>
        <button type="submit" onClick={event}>%</button>
        <button type="submit" onClick={event} className="operand">
          ÷
        </button>
        <button type="submit" onClick={event}>7</button>
        <button type="submit" onClick={event}>8</button>
        <button type="submit" onClick={event}>9</button>
        <button type="submit" onClick={event} className="operand">
          x
        </button>
        <button type="submit" onClick={event}>4</button>
        <button type="submit" onClick={event}>5</button>
        <button type="submit" onClick={event}>6</button>
        <button type="submit" onClick={event} className="operand">
          -
        </button>
        <button type="submit" onClick={event}>1</button>
        <button type="submit" onClick={event}>2</button>
        <button type="submit" onClick={event}>3</button>
        <button type="submit" onClick={event} className="operand">
          +
        </button>
        <button type="submit" onClick={event} className="span__two">
          0
        </button>
        <button type="submit" onClick={event}>.</button>
        <button type="submit" onClick={event} className="operand">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
