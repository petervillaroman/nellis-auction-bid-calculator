import React, { useState } from 'react';
import './App.css';

const taxRates = {
  "Arizona": 0.056,
  "Texas": 0.0625,
  "Nevada": 0.0823
};

function App() {
  const [bidPrice, setBidPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [necessaryPrice, setNecessaryPrice] = useState('');
  const [state, setState] = useState('Nevada');

  function validateAndSetBidPrice(value) {
    const onlyNums = value.replace(/[^0-9]/g, '');
    setBidPrice(onlyNums);
}
    function validateAndSetMaxPrice(value) {
    const onlyNums = value.replace(/[^0-9]/g, '');
    setMaxPrice(onlyNums);
    }



  const calculateBidTotal = () => {
    if (isNaN(bidPrice) || bidPrice === '') {
      alert(" Oops! That was not a valid number. Try again...");
    } else {
      let price = parseInt(bidPrice);
      price = price + (price * 0.15);
      let finalPrice = price + (price * taxRates[state]);
      setFinalPrice(finalPrice.toFixed(2));
    }
  }

  const calculateNecessaryBid = () => {
      if (isNaN(maxPrice) || maxPrice === '') {
        alert(" Oops! That was not a valid number. Try again...");
        } else {
        let price = parseInt(maxPrice);
        price = price - (price * 0.15);
        let necessaryPrice = price - (price * taxRates[state]);
        setNecessaryPrice(necessaryPrice.toFixed(2));

      }
  }

  return (
      <>

   <div className="Container">
       <div>
      <h1>Nellis Auction Customer Bid Tools</h1>
           <h2>Set your state</h2>

        <select value={state} onChange={e => setState(e.target.value)}>
          {Object.keys(taxRates).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
       </div>
   </div>
   <div className="Container">
    <div className="App">


        <h2>If you bid:</h2>

        <input type="text" placeholder="Enter your bid price" value={bidPrice} onChange={e => validateAndSetBidPrice(e.target.value)} />

        <h2> Your total price will be:</h2>
        <button onClick={calculateBidTotal}>Calculate</button>
        <p>Total Price: <b>{finalPrice}</b></p>

    </div>

      <div className="App">

        <h1> Maximum spend calculator</h1>
        <h3>Set your maximum budget</h3>
        <input type="text" placeholder="Enter your max price" value={maxPrice} onChange={e => validateAndSetMaxPrice(e.target.value)} />


        <button onClick={calculateNecessaryBid}>Calculate</button>
        <p>Necessary Price: <b>{necessaryPrice}</b></p>

    </div>
       </div>
          </>
  );
}

export default App;
