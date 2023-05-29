import React, { useState } from 'react';
import './App.css';

const taxRates = {
  "Arizona": 0.056,
  "Texas": 0.0625,
  "Nevada": 0.0823
};

function App() {
  const [bidPrice, setBidPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [state, setState] = useState('Nevada');

  function validateAndSetBidPrice(value) {
    const onlyNums = value.replace(/[^0-9]/g, '');
    setBidPrice(onlyNums);
}

  const calculatePrice = () => {
    if (isNaN(bidPrice) || bidPrice === '') {
      alert(" Oops! That was not a valid number. Try again...");
    } else {
      let price = parseInt(bidPrice);
      price = price + (price * 0.15);
      let finalPrice = price + (price * taxRates[state]);
      setFinalPrice(finalPrice.toFixed(2));
    }
  }

  return (
    <div className="App">
      
        <h1>Nellis Auction</h1>
        <h2>Final Bid Price Calculator</h2>
        <select value={state} onChange={e => setState(e.target.value)}>
          {Object.keys(taxRates).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <input type="number" placeholder="Enter your bid price" value={bidPrice} onChange={e => validateAndSetBidPrice(e.target.value)} />

 
        <button onClick={calculatePrice}>Calculate</button>
        <p>Final Price: {finalPrice}</p>
      
    </div>
  );
}

export default App;
