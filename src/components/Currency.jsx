import React, { useState } from "react";
import axios from "axios";
import { MdOutlineArrowCircleRight } from "react-icons/md";

function Currency() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  const convert = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
      );
      const conversionRate = response.data.data[toCurrency];
      const result = (conversionRate * amount).toFixed(2);
      setResult(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="currency-main">
        <div
          style={{
            backgroundColor: "#10596F",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div className="currency-title">
            <span>Currency</span>
            <span style={{ color: "#21D3EE" }}>APP</span>
          </div>
        </div>

        <div className="entries-div">
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="first-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>CHF</option>
            <option>RUB</option>
            <option>CNY</option>
            <option>TRY</option>
          </select>
          
          <MdOutlineArrowCircleRight className="arrow" />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="second-currency-option"
          >
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>CHF</option>
            <option>RUB</option>
            <option>CNY</option>
            <option>TRY</option>
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="number"
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button onClick={convert} className="btn">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
