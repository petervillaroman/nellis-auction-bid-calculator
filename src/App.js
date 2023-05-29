import React, { useState } from 'react';
import './App.css';

function App() {
  const [bidPrice, setBidPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const calculatePrice = () => {
    if (isNaN(bidPrice) || bidPrice === '') {
      alert(" Oops! That was not a valid number. Try again...");
    } else {
      let price = parseInt(bidPrice);
      price = price + (price * 0.15);
      let finalPrice = price + (price * 0.0838);
      setFinalPrice(finalPrice.toFixed(2));
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Nellis Auction Bid Price Calculator</h1>
        <input type="text" placeholder="Enter your bid price" value={bidPrice} onChange={e => setBidPrice(e.target.value)} />
        <button onClick={calculatePrice}>Calculate</button>
        <p>Final Price: {finalPrice}</p>
      </div>
    </div>
  );
}

export default App;
