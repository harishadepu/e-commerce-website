import React from 'react'
import './Footer.css'
import insta from '../../Assets/instagram_icon.png'
import whats from '../../Assets/whatsapp_icon.png'
import pint from '../../Assets/pintester_icon.png'
import logo from '../../Assets/logo_big.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='shopper'>
        <img src={logo} className='shop' alt="shopper"/>
        <h1>SHOPPER</h1>
      </div>
      <div className='names'>
        <p>Company</p>
        <p>Product</p>
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className='social-icons'>
        <img src={insta} className='social'/>
        <img src={pint} className='social'/>
        <img src={whats} className='social'/>
      </div>
      <hr className='horizen'/>
      <p className='copyright'>Copyrights applied</p>
    </div>
  )
}

export default Footer