import React from 'react'
import hand from '../../assets/hand_icon.png';
import model from '../../assets/hero_image.png'
import arrow from '../../assets/arrow.png'
import './Hero.css'
const Hero = () => {
  return (
    
    <div className='hero-container'>
        <div className="content">
            <p className='arri'>NEW ARRIVALS ONLY</p>
            <h1 className='title'>new <img src={hand} className='hand-icon'/><br/>
             collections <br/> for everyone</h1>
            <button className='latest'>Latest Collection <img src={arrow} className="arrow"/></button>
        </div>
        <div className='model-img'>
            <img src={model} className='model' alt="model"/>
        </div>
    </div>
    
  )
}

export default Hero