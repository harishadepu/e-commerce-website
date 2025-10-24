import React from 'react'
import './Breadgrums.css'
import arrow from '../../assets/breadcrum_arrow.png'
const Breadgrum = (props) => {
    const {product} = props
    console.log(product)
  return (
    <div className='url'>
        Home<img src={arrow}/>shop<img src={arrow}/>{product.category}<img src={arrow}/>{product.name}
    </div>
  )
}

export default Breadgrum