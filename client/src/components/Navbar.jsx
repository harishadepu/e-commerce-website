import React,{useContext, useRef, useState} from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import dropDown from '../assets/dropdown_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../shopContext/ShopContext';
const Navbar = () => {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuref = useRef()
    const dropDownToggle=(e)=>{
      menuref.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle("open");
    }

  return (
    <nav className='container'>
        <div className='logo-container'>
        <img src={logo} className='logo' alt="logo"/>
        <h1 className='logo-text'>Shopper</h1>
        </div>
        <img src={dropDown} onClick={dropDownToggle} className="drop-down"/>
        <ul ref={menuref} className='list-container'>
            <li onClick={()=>{setMenu('shop')}}><Link to="/" style={{textDecoration: 'none'}}>Shop</Link>{menu === "shop" ? <hr/> : "" }</li>
            <li onClick={()=>{setMenu('men')}}><Link to="/men" style={{textDecoration: 'none'}}>Men</Link>{menu === "men" ? <hr/> : "" }</li>
            <li onClick={()=>{setMenu('women')}}><Link to="/women" style={{textDecoration: 'none'}}>Women</Link>{menu === "women" ? <hr/> : "" }</li>
            <li onClick={()=>{setMenu('kids')}}><Link to="kids" style={{textDecoration: 'none'}}>Kids</Link>{menu === "kids" ? <hr/> : "" }</li>
        </ul>
        <div className='cart-container'>
          {localStorage.getItem("auth-token")? <button className='login' onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}}>Logout</button>
          :<Link to="/login" style={{textDecoration: 'none'}}><button className='login'>Login</button></Link>}
            
            <Link to="/cart" style={{textDecoration: 'none'}}><img src={cart} className='cart' alt="cart"/></Link>
            <p className='cart-num'>{getTotalCartItems()}</p>
        </div>
    </nav>
  )
}

export default Navbar