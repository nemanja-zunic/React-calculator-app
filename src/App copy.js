import React, { useState } from 'react';
import './Buttons.css'

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText));
  }

  const allclear = () => {
    setResult('0');
  }

  const clear = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    setResult(eval(result.toString()));
  }

  return (
    <div className="calculator-grid">

      <div className="output">

        <div data-previous-operand className="previous-operand" ></div>
        <div data-current-operand className="current-operand">{result}</div>

      </div>

      <button onClick={allclear} id='allclear' className="span-two">AC</button>
      <button onClick={clear} id='del'>DEL</button>
      <button name='/' onClick={handleClick}>÷</button>
      <button name='1' onClick={handleClick}>1</button>
      <button name='2' onClick={handleClick}>2</button>
      <button name='3' onClick={handleClick}>3</button>
      <button name='*' onClick={handleClick}>*</button>
      <button name='4' onClick={handleClick}>4</button>
      <button name='5' onClick={handleClick}>5</button>
      <button name='6' onClick={handleClick}>6</button>
      <button name='+' onClick={handleClick}>+</button>
      <button name='7' onClick={handleClick}>7</button>
      <button name='8' onClick={handleClick}>8</button>
      <button name='9' onClick={handleClick}>9</button>
      <button name='-' onClick={handleClick}>-</button>
      <button name='.' onClick={handleClick}>.</button>
      <button name='0' onClick={handleClick}>0</button>
      <button onClick={calculate} className="span-two">=</button>

    </div>
  )


}

export default App;
