import React from "react";
import Currency from "./components/Currency";
import Footer from "./components/Footer";
import bgImage from '../public/bg.jpg';  
import './index.css';  

function App() {
  return (
    <div 
       className="background-container"
       style={{ backgroundImage: `url(${bgImage})` }} >
      <Currency />
      <Footer />
    </div>
  );
}

export default App;
