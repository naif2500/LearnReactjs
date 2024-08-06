import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={styles.calculator}>
      <h1>Calculator</h1>
      <div style={styles.display}>
        <input style={styles.input} type="text" value={input} readOnly />
        <input style={styles.result} type="text" value={result} readOnly />
      </div>
      <div style={styles.buttons}>
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={value === '=' ? handleCalculate : () => handleClick(value)}>{value}</button>
        ))}
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    backgroundColor: '#f9f9f9',
  },
  display: {
    marginBottom: '10px',
    textAlign: 'right',
  },
  input: {
    width: '100%',
    height: '40px',
    fontSize: '20px',
    textAlign: 'right',
    marginBottom: '5px',
  },
  result: {
    width: '100%',
    height: '40px',
    fontSize: '20px',
    textAlign: 'right',
    marginBottom: '10px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
};

export default Calculator;
