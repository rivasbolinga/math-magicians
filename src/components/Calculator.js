// import calculate from './logic/calculate.js'
import React, { useState } from 'react';
import Input from './input.js';
import Button from './buttons.js'
const Calculator = () => {
  // -- Need to destructure the array because useState always
  //returns array wit 2 values.
  const [result, setResult] = useState('');
  //Take the strinc of every button to display it in the calculator screen
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  return (
  <div className="calculadora">
  <Input result= {result} value = {result}/>
 
  <div className="all-btns">
  <div className="buttons">
    <Button name='AC' />
    <Button name='+/-' />
    <Button name='%' />
    <Button name="7" />
    <Button name="8" />
    <Button name='9' />
    <Button name='4' />
    <Button name='5' />
    <Button name='6' />
    <Button name='1' />
    <Button name='2' />
    <Button name='3' />
    <Button name='0' />
    <Button name='.' />
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