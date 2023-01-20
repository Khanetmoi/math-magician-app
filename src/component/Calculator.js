import React, { Component } from 'react';
import calculate from '../logic/calculate';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  event = (e) => {
    const value = e.target.textContent;
    this.setState((obj) => calculate(obj, value));
  }

  render() {
    const { next, total, operation } = this.state;
    const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
    return (
      <div className="container">
        <div className="output">
          <span>{result}</span>
        </div>
        <button type="submit" onClick={this.event}>AC</button>
        <button type="submit" onClick={this.event}>+/-</button>
        <button type="submit" onClick={this.event}>%</button>
        <button type="submit" onClick={this.event} className="operand">
          ÷
        </button>
        <button type="submit" onClick={this.event}>7</button>
        <button type="submit" onClick={this.event}>8</button>
        <button type="submit" onClick={this.event}>9</button>
        <button type="submit" onClick={this.event} className="operand">
          x
        </button>
        <button type="submit" onClick={this.event}>4</button>
        <button type="submit" onClick={this.event}>5</button>
        <button type="submit" onClick={this.event}>6</button>
        <button type="submit" onClick={this.event} className="operand">
          -
        </button>
        <button type="submit" onClick={this.event}>1</button>
        <button type="submit" onClick={this.event}>2</button>
        <button type="submit" onClick={this.event}>3</button>
        <button type="submit" onClick={this.event} className="operand">
          +
        </button>
        <button type="submit" onClick={this.event} className="span__two">
          0
        </button>
        <button type="submit" onClick={this.event}>.</button>
        <button type="submit" onClick={this.event} className="operand">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
