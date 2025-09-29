import React from 'react'
import './Offer.css'
function Offer() {
  return (
    <div className='offer-page'>
      <h1 className='offer-name'>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className='input-text'>
        <input type="email" placeholder="Your email id" className="input"/>
        <button className='subscribe'>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Offer
