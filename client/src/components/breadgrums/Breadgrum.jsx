import React from 'react';
import './Breadgrums.css';
import arrow from '../../assets/breadcrum_arrow.png';

const Breadgrum = ({ product }) => {
  // Debugging: see what product looks like
  console.log("Breadgrum product:", product);

  if (!product) {
    // Render a fallback while product is loading
    return (
      <div className='url'>
        Home <img src={arrow} alt="arrow" /> shop
      </div>
    );
  }

  return (
    <div className='url'>
      Home <img src={arrow} alt="arrow" /> 
      shop <img src={arrow} alt="arrow" /> 
      {product.category} <img src={arrow} alt="arrow" /> 
      {product.name}
    </div>
  );
};

export default Breadgrum;