import React from 'react'
import CartItems from '../components/cartItems/CartItems'
const Cart = () => {
  const token = localStorage.getItem('auth-token');
  if(!token){
    window.location.replace('/login')
  }
  return (
    <>
    <CartItems/>
    </>
  )
}

export default Cart