import React, { useState } from "react";
import './index.css'

function RandomNumber() {

  const [count, setCount] = useState(0);

  const change = () => {
    const newRandomNumber = Math.floor(Math.random() * 100);

    setCount(newRandomNumber)
  };

  return (
    <div className="random-container">
     <h1>RandomNumber</h1>
     <p>Generate a random number in the range of 0 to 100</p>
     <button onClick={change} className="btn-btn-primary">Generate</button><br/>
     <span className="i1">{count}</span>

    
    </div>
  );
}

export default RandomNumber;
