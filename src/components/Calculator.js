
const Calculator = () => {
  return (
  <div className="calculadora">
  <div className="display-screen">
    <div className="previous-operand">
    </div>
    <div className="current-operand">0</div>
  </div>
  <div className="all-btns">
 
  <div className="buttons">
  
    <button className="delete delet">AC</button>
    <button className="delete clear">+/-</button>
    <button className="percentage">%</button>
    <button className="number seven">7</button>
    <button className="number eigth">8</button>
    <button className="number nine">9</button>
    <button className="number four">4</button>
    <button className="number five">5</button>
    <button className="number six">6</button>
    <button className="number one">1</button>
    <button className="number two">2</button>
    <button className="number three">3</button>
    <button className="number zero">0</button>
    <button className="number dot">.</button>
    </div>
  <div className="operations">
       <button className="ope divide">÷</button>
       <button className="ope por">x</button>
       <button className="ope minus">-</button>
       <button className="ope sum">+</button>
       <button className="equal">=</button>
    </div>

</div>
</div>
  );
}

export default Calculator;