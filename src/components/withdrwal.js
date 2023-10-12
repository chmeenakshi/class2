import React, { useState } from 'react';
import './Style.css'

function Withdrwal() {
    
    const [balance, setBalance] = useState(2000);
  
         const handleWithdrawal = (amount) => {
           if (balance >= amount) {
             setBalance(balance - amount);
           } else {
            alert('Insufficient funds');
          }
        }
    return (
      
      <div className='cash'>
        <div className='empty'>
            <p className='sss'>ch</p>
        </div>
        <h1 className='head2'>Meenakshi</h1>
        <p style={{fontSize:"20px", fontWeight:"bold", color:"gray"}}>Your Balance <span className='bal'>{balance}</span></p>
        <p style={{marginLeft:"35vh",fontWeight:"bold", color:"gray",fontSize:"12px"}}>in Rupees</p>
        <p className='par'>Withdraw</p>
        <p className='par2'>CHOOSE SUM (IN RUPEES)</p>
        <div className='d=flex flex-row'>
          <button onClick={() => handleWithdrawal(50)} className='btn55'>50</button>  
          <button onClick={() => handleWithdrawal(100)} className='btn55'>100</button>
          </div>
          <div className='d=flex flex-row'>
          <button onClick={() => handleWithdrawal(200)} className='btn55'>200</button>
          <button onClick={() => handleWithdrawal(500)} className='btn55'>500</button>
        </div>
      </div>
    );
    
}
  
  export default Withdrwal;
  
