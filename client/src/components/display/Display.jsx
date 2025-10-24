import React, { useContext } from 'react'
import './Display.css'
import stars from '../../assets/star_icon.png'
import dullStar from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../shopContext/ShopContext'
const Display = (props) => {
    const {product} = props;
    const {name,image,new_price,old_price} = product
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='display-container'>
        <div className='left-container'>
            <div className='images'>
                <img src={image} className='dress'/>
                <img src={image} className='dress'/>
                <img src={image} className='dress'/>
                <img src={image} className='dress'/>
            </div>
            <img src={image} className='big-dress'/>
        </div>
        <div className='right-container'>
            <h1 className='dress-name'>{name}</h1>
            <div className='stars'>
                <img src={stars} className='star'/>
                <img src={stars} className='star'/>
                <img src={stars} className='star'/>
                <img src={stars} className='star'/>
                <img src={dullStar} className='star'/>
                <p>(122)</p>
            </div>
            <div className='price-rates'>
                <p className='old'>${old_price}</p>
                <p className='new-rate'>${new_price}</p>
            </div>
            <p className='discreption-dress'>A lightweight,usually knitted, pullover shirt, close fitting and with a round neckline and short sleeves, warn as an undershirt or outer garmets. </p>
            <p className='size'>Select Size</p>
            <div className='sizes'>
                <p className='select-size'>S</p>
                <p className='select-size'>M</p>
                <p className='select-size'>L</p>
                <p className='select-size'>XL</p>
                <p className='select-size'>XXL</p>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='addtocard'>ADD TO CART</button>
            <p><span>Category: </span>Women, T-shirt, Crop Top</p>
            <p><span>Tags: </span>Modern, Latest</p>

        </div>
    </div>
  )
}

export default Display