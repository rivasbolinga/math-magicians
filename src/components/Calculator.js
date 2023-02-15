// import calculate from './logic/calculate.js'
import React, { useState } from 'react';
import Input from './input.js';
import Button from './buttons.js'
const Calculator = () => {
  // -- Need to destructure the array because useState always
  //returns array wit 2 values.
  const [result, setResult] = useState('');
  const [first, setFirst] = useState('');
  //Take the strinc of every button to display it in the calculator screen
  const addInput = (e) => {
    setFirst((first) =>[...first, e + " "])
    
  }
  return (
  <div className="calculadora">
  <Input first = {first} result= {result}/>

  <div className="all-btns">
  <div className="buttons">
    <Button name='AC' />
    <Button name='+/-'handleClick={addInput} />
    <Button name='%' handleClick={addInput} />
    <Button name="7"handleClick={addInput} />
    <Button name="8" handleClick={addInput} />
    <Button name='9' handleClick={addInput}/>
    <Button name='4' handleClick={addInput}/>
    <Button name='5'handleClick={addInput} />
    <Button name='6' handleClick={addInput}/>
    <Button name='1' handleClick={addInput}/>
    <Button name='2' handleClick={addInput}/>
    <Button name='3' handleClick={addInput}/>
    <Button name='0' handleClick={addInput}/>
    <Button name='.' handleClick={addInput}/>
    </div>
  <div className="operations">
       <Button name='÷' />
       <Button name='x' />
       <Button name='-' />
       <Button name='+' />
       <Button name='=' />
    </div>

</div>
</div>
  );
}

export default Calculator;