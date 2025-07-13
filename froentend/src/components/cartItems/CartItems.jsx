import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../shopContext/ShopContext'
import remove from '../../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount, all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItem-container'>
      <div className='product-title-container'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='line'/>
      {all_product.map((each)=>{
        if(cartItems[each.id]>0){
           return<>
             <div className='products-detail-container product-title-container'>
                <img src={each.image} className='cart-image'/>
                <p>{each.name}</p>
                <p>${each.new_price}</p>
                <button className='cart-button'>{cartItems[each.id]}</button>
                <p>${each.new_price * cartItems[each.id]}</p>
                <img src={remove} alt="cross" onClick={()=>{removeFromCart(each.id)}} className='cart-remove'/>
            </div>
      <hr className='line'/>
           </>
        }
        return null;
      })}

      <div className='cart-Total-container'>
        <div className='cart-total'>
          <h1>Cart Totals</h1>
          <div className='total'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className='line'/>
          <div className='total'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className='line'/>
          <div className='total'>
            <h4>Total</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <button className='proceed-btn'>Proceed to checkout</button>
        </div>
        <div className='promo-container'>
          <p>if you have a promo code Enter here</p>
          <div className='pomo-code-container'><input placeholder='promo code' className='promo-code'/>
          <button>Submit</button></div>
          
        </div>
      </div>
    </div>
  )
}

export default CartItems