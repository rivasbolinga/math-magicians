import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };
//Calculator html body with the handle click function when we click button (onClick)
  return (
    <div className='calculadora'>
    <div className='deco-div'>
    <div className='display-screen-container'>
      <input className='display-screen' type="text" value={result.next || result.total || '0'}  />
      </div>
      </div>
      <div className='all-btns'>
      <div className='buttons'>
        <button className='button' onClick={() => handleClick('AC')}>AC</button>
        <button className='button' onClick={() => handleClick('+/-')}>+/-</button>
        <button className='button' onClick={() => handleClick('%')}>%</button>
        <button className='button' onClick={() => handleClick('7')}>7</button>
        <button className='button' onClick={() => handleClick('8')}>8</button>
        <button className='button' onClick={() => handleClick('9')}>9</button>
        <button className='button' onClick={() => handleClick('4')}>4</button>
        <button className='button' onClick={() => handleClick('5')}>5</button>
        <button className='button' onClick={() => handleClick('6')}>6</button>
        <button className='button' onClick={() => handleClick('1')}>1</button>
        <button className='button' onClick={() => handleClick('2')}>2</button>
        <button className='button' onClick={() => handleClick('3')}>3</button>
        <button className='button zero' onClick={() => handleClick('0')}>0</button>
        <button className='button' onClick={() => handleClick('.')}>.</button>
        </div>
      <div className="operations">
       <button className="ope divide" onClick={() => handleClick('÷')}>÷</button>
       <button className="ope por" onClick={() => handleClick('x')}>x</button>
       <button className="ope minus" onClick={() => handleClick('-')}>-</button>
       <button className="ope sum"onClick={() => handleClick('+')}>+</button>
       <button className="equal"onClick={() => handleClick('=')}>=</button>
    </div>
    </div>
    </div>
  );
}


export default Calculator;